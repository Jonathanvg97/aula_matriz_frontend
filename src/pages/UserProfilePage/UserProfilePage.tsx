import { MotionAnimate } from "@/components/motionAnimate/MotionAnimate";
import { UserPlus2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ProfileUserForm } from "@/features/userProfile/components/profileUserForm/ProfileUserForm";

export const UserProfilePage = () => {
  //
  const navigate = useNavigate();
  // UI
  return (
    <div className="UserProfilePage bg-primary flex flex-col md:flex-row w-full gap-12">
      <div className="w-full lg:w-1/2 text-white flex flex-col items-center justify-center p-4 ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Bienvenido <br />
        </h2>
        <p className="text-base md:text-lg text-center max-w-md">
          Aquí puedes actualizar y gestionar tu información de manera sencilla.
        </p>

        {/* Icono animado */}
        <MotionAnimate
          Icon={<UserPlus2Icon className="w-24 h-24 md:w-32 md:h-32 mt-6" />}
        />

        {/* Botón de acción rápida */}
        <Button
          onClick={() => navigate("/dashBoard")}
          className={`mt-6 px-6 py-2 bg-white text-primary font-semibold rounded-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition cursor-pointer `}
        >
          Regresar
        </Button>
      </div>

      {/* Contenedor del formulario asegurando altura completa */}
      <div className="flex-1 flex items-center justify-center">
        <ProfileUserForm />
      </div>
    </div>
  );
};
