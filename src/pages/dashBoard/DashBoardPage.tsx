import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Github,
  Globe,
  IdCard,
  Linkedin,
  Phone,
  Twitter,
  UserCog,
  Users,
} from "lucide-react";

interface Perfil {
  user: {
    first_name: string;
    last_name: string;
  };
  telefono: string;
  tipo_usuario: string;
  tipo_naturaleza: string;
  biografia: string;
  documento: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  sitio_web?: string;
  esta_verificado: string;
}

export const DashBoardPage = () => {
  const perfil: Perfil = {
    user: {
      first_name: "Carlos",
      last_name: "Apellido",
    },
    telefono: "1234",
    tipo_usuario: "instructor",
    tipo_naturaleza: "natural",
    biografia:
      "Desarrollador apasionado por la educación y la innovación tecnológica.",
    documento: "1234",
    linkedin: "https://www.linkedin.com/in/carlos/",
    twitter: "https://www.twitter.com/carlos/",
    github: "https://github.com/carlos",
    sitio_web: "https://carlos.dev",
    esta_verificado: "true",
  };

  return (
    <div className="DashBoardPage min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold tracking-tight text-primary mb-4">
        Hola, {perfil.user.first_name} 👋
      </h1>

      <Card className="shadow-xl border bg-gray-100 border-primary/20 rounded-2xl w-full max-w-lg">
        {/* Header */}
        <CardHeader className="flex flex-col items-center gap-2">
          <Avatar className="w-28 h-28 border-4 border-primary shadow-md">
            <AvatarImage src="" alt={perfil.user.first_name} />
            <AvatarFallback className="text-2xl">
              {perfil.user.first_name[0]}
              {perfil.user.last_name[0]}
            </AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-semibold flex items-center gap-2">
            {perfil.user.first_name} {perfil.user.last_name}
            {perfil.esta_verificado === "true" && (
              <CheckCircle className="h-5 w-5 text-green-500" />
            )}
          </CardTitle>
          <p className="text-sm  max-w-md text-center">{perfil.biografia}</p>
        </CardHeader>

        {/* Content */}
        <CardContent className="space-y-6">
          <Separator />

          {/* Info */}
          <div className="grid gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span className="font-medium">Teléfono:</span>
              <span>{perfil.telefono}</span>
            </div>

            <div className="flex items-center gap-2">
              <IdCard className="h-4 w-4 text-primary" />
              <span className="font-medium">Documento:</span>
              <span>{perfil.documento}</span>
            </div>

            <div className="flex items-center gap-2">
              <UserCog className="h-4 w-4 text-primary" />
              <span className="font-medium">Tipo de usuario:</span>
              <Badge className="ml-1 bg-amber-200">{perfil.tipo_usuario}</Badge>
            </div>

            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span className="font-medium">Naturaleza:</span>
              <Badge variant="secondary" className="ml-1">
                {perfil.tipo_naturaleza}
              </Badge>
            </div>
          </div>

          <Separator />

          {/* Redes sociales */}
          <div className="flex justify-center gap-4">
            {perfil.linkedin && (
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <a href={perfil.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="h-5 w-5 text-blue-600" />
                </a>
              </Button>
            )}
            {perfil.twitter && (
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <a href={perfil.twitter} target="_blank" rel="noreferrer">
                  <Twitter className="h-5 w-5 text-sky-500" />
                </a>
              </Button>
            )}
            {perfil.github && (
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <a href={perfil.github} target="_blank" rel="noreferrer">
                  <Github className="h-5 w-5 text-gray-900" />
                </a>
              </Button>
            )}
            {perfil.sitio_web && (
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <a href={perfil.sitio_web} target="_blank" rel="noreferrer">
                  <Globe className="h-5 w-5 text-green-600" />
                </a>
              </Button>
            )}
          </div>

          <Separator />

          {/* Acciones */}
          <div className="flex justify-center gap-4">
            <Button className="bg-primary text-white font-semibold">
              Actualizar perfil
            </Button>
            <Button variant="secondary" className="font-semibold">
              Actualizar foto
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
