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
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DashBoardPageSkeleton } from "@/components/skeletons/DashBoardPageSkeleton";
import { useUserStore } from "@/store/user.store";
import { useUserProfile } from "@/features/userProfile/hooks/useUserProfile";
import { useEffect, useState } from "react";
import { UpdatePhotoProfile } from "../../features/userProfile/components/updatePhotoProfile/UpdatePhotoProfile";

export const DashBoardPage = () => {
  //
  const navigate = useNavigate();
  const { fetchProfile } = useUserProfile();
  //store
  const { profile, loading } = useUserStore();
  //
  const [openModal, setOpenModal] = useState<boolean>(false);
  //
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  //
  return (
    <div className="DashBoardPage bg-primary min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold tracking-tight text-primary mb-4">
        Hola, {profile?.user.first_name} 👋
      </h1>
      {!loading ? (
        <Card className="shadow-xl border bg-gray-100 border-primary/20 rounded-2xl w-full max-w-lg">
          {/* Header */}
          <CardHeader className="flex flex-col items-center gap-2">
            <Avatar className="w-28 h-28 border-4 border-primary shadow-md">
              <AvatarImage src="" alt={profile?.user.first_name} />
              <AvatarFallback className="text-2xl">
                {profile?.user.first_name[0]}
                {profile?.user.last_name[0]}
              </AvatarFallback>
            </Avatar>
            <CardTitle className="text-2xl font-semibold flex items-center gap-2">
              {profile?.user.first_name} {profile?.user.last_name}
              {profile?.esta_verificado && (
                <CheckCircle className="h-5 w-5 text-green-500" />
              )}
            </CardTitle>
            <p className="text-sm  max-w-md text-center">
              {profile?.biografia}
            </p>
          </CardHeader>

          {/* Content */}
          <CardContent className="space-y-6">
            <Separator />

            {/* Info */}
            <div className="grid gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="font-medium">Teléfono:</span>
                <span>{profile?.telefono}</span>
              </div>

              <div className="flex items-center gap-2">
                <IdCard className="h-4 w-4 text-primary" />
                <span className="font-medium">Documento:</span>
                <span>{profile?.documento}</span>
              </div>

              <div className="flex items-center gap-2">
                <UserCog className="h-4 w-4 text-primary" />
                <span className="font-medium">Tipo de usuario:</span>
                <Badge className="ml-1 bg-amber-200">
                  {profile?.tipo_usuario}
                </Badge>
              </div>
            </div>

            <Separator />

            {/* Redes sociales */}
            <div className="flex justify-center gap-4">
              {profile?.redes_sociales?.linkedin && (
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                >
                  <a
                    href={profile?.redes_sociales?.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="h-5 w-5 text-blue-600" />
                  </a>
                </Button>
              )}
              {profile?.redes_sociales?.twitter && (
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                >
                  <a
                    href={profile?.redes_sociales?.twitter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Twitter className="h-5 w-5 text-sky-500" />
                  </a>
                </Button>
              )}
              {profile?.redes_sociales?.github && (
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                >
                  <a
                    href={profile?.redes_sociales?.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="h-5 w-5 text-gray-900" />
                  </a>
                </Button>
              )}
              {profile?.redes_sociales?.sitio_web && (
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                >
                  <a
                    href={profile?.redes_sociales?.sitio_web}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Globe className="h-5 w-5 text-green-600" />
                  </a>
                </Button>
              )}
            </div>

            <Separator />

            {/* Acciones */}
            <div className="flex justify-center gap-4">
              <Button
                className="bg-primary text-white font-semibold cursor-pointer hover:scale-105"
                onClick={() => navigate("/userProfile")}
              >
                Actualizar perfil
              </Button>
              <Button
                variant="secondary"
                className="font-semibold cursor-pointer hover:scale-105"
                onClick={() => setOpenModal(true)}
              >
                Actualizar foto
              </Button>
            </div>
          </CardContent>
          <UpdatePhotoProfile open={openModal} onOpenChange={setOpenModal} />
        </Card>
      ) : (
        <DashBoardPageSkeleton />
      )}
    </div>
  );
};
