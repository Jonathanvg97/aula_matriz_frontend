import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import {
  UserProfileFormValues,
  userProfileSchema,
} from "../../validators/userProfile.validators";
import { UserTypeEnum } from "../../types/userResponse.interface";
import { Switch } from "@/components/ui/switch";
import { useEffect } from "react";
import { useUserStore } from "@/store/user.store";
import { useUserProfile } from "../../hooks/useUserProfile";

export const ProfileUserForm = () => {
  //store
  const { profile } = useUserStore();
  //hooks
  const navigate = useNavigate();
  const { updateProfile } = useUserProfile();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<UserProfileFormValues>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: {
      user: {
        first_name: profile?.user.first_name,
        last_name: profile?.user.last_name,
      },
      telefono: profile?.telefono,
      tipo_usuario: profile?.tipo_usuario || "",
      documento: profile?.documento,
      esta_verificado: profile?.esta_verificado,
      biografia: profile?.biografia,
      redes_sociales: {
        linkedin: profile?.redes_sociales?.linkedin,
        twitter: profile?.redes_sociales?.twitter,
        github: profile?.redes_sociales?.github,
        sitio_web: profile?.redes_sociales?.sitio_web,
      },
    },
  });

  // Observar el valor actual del campo esta_verificado
  const estaVerificado = watch("esta_verificado");

  const onSubmit = async (data: UserProfileFormValues) => {
    console.log(data);
    await updateProfile(data);
  };

  useEffect(() => {
    if (!profile) {
      navigate("/dashboard");
    }
  }, [profile, navigate]);

  return (
    <section className="ProfileUserForm bg-white w-full min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 shadow-xl border-primary border-2 h-full max-h-[86vh] overflow-y-auto overflow-x-hidden mb-20">
        <CardContent className="p-0">
          <h2 className="text-2xl font-bold text-center mb-4 text-primary/100">
            Actualizar Perfil
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Nombre */}
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="user.first_name"
                className="text-primary/100 font-bold"
              >
                Nombre
              </Label>
              <Input
                id="user.first_name"
                type="text"
                placeholder="Nombre"
                {...register("user.first_name")}
              />
              {errors.user?.first_name && (
                <p className="text-red-500 text-sm">
                  {errors.user.first_name.message}
                </p>
              )}
            </div>

            {/* Apellido */}
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="user.last_name"
                className="text-primary/100 font-bold"
              >
                Apellido
              </Label>
              <Input
                id="user.last_name"
                type="text"
                placeholder="Apellido"
                {...register("user.last_name")}
              />
              {errors.user?.last_name && (
                <p className="text-red-500 text-sm">
                  {errors.user.last_name.message}
                </p>
              )}
            </div>

            {/* Teléfono */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="telefono" className="text-primary/100 font-bold">
                Teléfono
              </Label>
              <Input
                id="telefono"
                type="text"
                placeholder="Teléfono"
                {...register("telefono")}
              />
              {errors.telefono && (
                <p className="text-red-500 text-sm">
                  {errors.telefono.message}
                </p>
              )}
            </div>

            {/* Documento */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="documento" className="text-primary/100 font-bold">
                Documento
              </Label>
              <Input
                id="documento"
                type="text"
                placeholder="Documento"
                {...register("documento")}
              />
              {errors.documento && (
                <p className="text-red-500 text-sm">
                  {errors.documento.message}
                </p>
              )}
            </div>

            {/* Tipo de usuario */}
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="tipo_usuario"
                className="text-primary/100 font-bold"
              >
                Tipo de usuario
              </Label>
              <Select
                onValueChange={(value) =>
                  setValue("tipo_usuario", value, { shouldDirty: true })
                }
                defaultValue={profile?.tipo_usuario}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona un tipo de usuario" />
                </SelectTrigger>
                <SelectContent
                  position="popper"
                  className="mt-1 rounded-md border bg-popover shadow-md bg-primary/100 text-secondary"
                >
                  {Object.values(UserTypeEnum).map((tipo) => (
                    <SelectItem
                      key={tipo}
                      value={tipo}
                      className="cursor-pointer py-2 pl-2 pr-4"
                    >
                      {tipo}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.tipo_usuario && (
                <p className="text-red-500 text-sm">
                  {errors.tipo_usuario.message}
                </p>
              )}
            </div>

            {/* Biografía */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="biografia" className="text-primary/100 font-bold">
                Biografía
              </Label>
              <Input
                id="biografia"
                type="text"
                placeholder="Cuéntanos un poco sobre ti"
                {...register("biografia")}
              />
              {errors.biografia && (
                <p className="text-red-500 text-sm">
                  {errors.biografia.message}
                </p>
              )}
            </div>

            {/* Redes sociales */}
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="redes_sociales.linkedin"
                className="text-primary/100 font-bold"
              >
                LinkedIn
              </Label>
              <Input
                id="redes_sociales.linkedin"
                type="url"
                placeholder="https://linkedin.com/..."
                {...register("redes_sociales.linkedin")}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label
                htmlFor="redes_sociales.twitter"
                className="text-primary/100 font-bold"
              >
                Twitter
              </Label>
              <Input
                id="redes_sociales.twitter"
                type="url"
                placeholder="https://twitter.com/..."
                {...register("redes_sociales.twitter")}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label
                htmlFor="redes_sociales.github"
                className="text-primary/100 font-bold"
              >
                GitHub
              </Label>
              <Input
                id="redes_sociales.github"
                type="url"
                placeholder="https://github.com/..."
                {...register("redes_sociales.github")}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label
                htmlFor="redes_sociales.sitio_web"
                className="text-primary/100 font-bold"
              >
                Sitio Web
              </Label>
              <Input
                id="redes_sociales.sitio_web"
                type="url"
                placeholder="https://..."
                {...register("redes_sociales.sitio_web")}
              />
            </div>

            {/* Switch de verificación - CORREGIDO sin useEffect */}
            <div className="flex items-center justify-between p-3 border rounded-lg bg-slate-50">
              <Label
                htmlFor="esta_verificado"
                className="text-primary/100 font-bold text-base"
              >
                ¿Usuario verificado?
              </Label>
              <Switch
                id="esta_verificado"
                checked={estaVerificado}
                onCheckedChange={(checked) => {
                  setValue("esta_verificado", checked, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                }}
                className={`cursor-pointer data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-300`}
              />
            </div>

            {/* Botón submit */}
            <Button
              type="submit"
              disabled={!isDirty || isSubmitting}
              className="w-full bg-primary cursor-pointer text-white hover:bg-primary/80 font-bold py-3 text-base"
            >
              {isSubmitting ? "Guardando..." : "Actualizar Perfil"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};
