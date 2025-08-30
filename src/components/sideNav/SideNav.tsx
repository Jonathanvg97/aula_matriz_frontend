import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useAuthActions } from "@/features/auth/hooks/useAuthActions";

export const SideNav = () => {
  const { logout } = useAuthActions();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="SideNav border-b bg-white dark:bg-gray-900">
      {/* Navbar para escritorio */}
      <div className="flex h-16 items-center px-6  justify-end">
        <Button
          onClick={handleLogout}
          variant="ghost"
          size="sm"
          className="flex cursor-pointer items-center gap-2 text-white hover:text-primary/100 hover:bg-white"
        >
          <LogOut className="h-4 w-4" />
          <span>Cerrar sesión</span>
        </Button>
      </div>
    </div>
  );
};
