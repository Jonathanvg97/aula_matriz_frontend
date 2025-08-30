import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUserProfile } from "@/features/userProfile/hooks/useUserProfile";
import { useUserStore } from "@/store/user.store";
import { X } from "lucide-react";

interface UpdatePhotoProfileProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const UpdatePhotoProfile = ({
  open,
  onOpenChange,
}: UpdatePhotoProfileProps) => {
  //
  const { loadingUpdate } = useUserStore();
  const { updateProfilePhoto } = useUserProfile();
  //
  const [file, setFile] = useState<File | null>(null);
  //
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      const res = await updateProfilePhoto(file);
      if (res) onOpenChange(false);
    }
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-md bg-secondary"
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        showCloseButton={false}
      >
        <DialogHeader>
          <DialogTitle className="font-extrabold">
            Actualizar Foto de Perfil
          </DialogTitle>
          <DialogClose asChild>
            <Button
              variant="ghost"
              size="icon"
              disabled={loadingUpdate}
              className="cursor-pointer absolute right-4 top-4 rounded-sm opacity-50"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogClose>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
          <Button
            type="submit"
            disabled={!file || loadingUpdate}
            className="cursor-pointer text-white font-extrabold"
          >
            {loadingUpdate ? "Subiendo..." : "Subir Foto"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
