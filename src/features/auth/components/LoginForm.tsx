import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { LoginFormValues, loginSchema } from "../validators/auth.validators";
import { useAuthActions } from "../hooks/useAuthActions";
import { toast } from "sonner";
import LoginAvatar from "@/components/lotties/LoginAvatar";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  //Local state
  const [showPassword, setShowPassword] = useState<boolean>(false);
  //Hooks
  const { login } = useAuthActions();
  //React hook form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  //Handlers

  const onSubmit = async (data: LoginFormValues) => {
    const response = await login(data);

    if (response?.status === "success") {
      toast.success("Inicio de sesión", {
        description: response.message,
      });
    }
  };

  //UI
  return (
    <div
      className={cn("LoginForm flex flex-col gap-6 text-secondary", className)}
      {...props}
    >
      <Card className="overflow-hidden border-secondary bg-gradient-to-br from-primary to-indigo-500 shadow-lg">
        <CardContent className="grid p-0 md:grid-cols-2 gap-6 md:gap-2 ">
          <form className="p-6 md:p-6 w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-xl md:text-2xl font-bold">
                  Ingresa con tu cuenta
                </h1>
              </div>

              {/* Username Input */}
              <div className="grid gap-2">
                <Label htmlFor="username">Usuario</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="usuario"
                  {...register("username")}
                />
                {errors.username && (
                  <p className="text-sm">{errors.username.message}</p>
                )}
              </div>

              {/* Password Input */}
              <div className="grid gap-2">
                <div className="flex items-center gap-7">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="/"
                    className="ml-auto text-sm underline-offset-2 hover:underline "
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 text-muted-foreground cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                {errors.password && (
                  <p className="text-sm">{errors.password.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-primary text-secondary font-bold cursor-pointer"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Ingresando..." : "Ingresar"}
              </Button>
            </div>
          </form>

          {/* Avatar responsive */}
          <div className="relative hidden md:flex items-center justify-center h-full p-4 overflow-hidden">
            <div className="max-w-[120px] md:max-w-[180px] lg:max-w-[260px]">
              <LoginAvatar />
            </div>
          </div>
        </CardContent>

        <div className="text-center text-xs text-white p-4 bg-indigo-700">
          © 2025 Aula Matriz. Todos los derechos reservados.
          <br />
          <a
            href="https://www.infinityti.org/es/"
            target="_blank"
            className="underline"
          >
            Aula Matriz.
          </a>
        </div>
      </Card>
    </div>
  );
}
