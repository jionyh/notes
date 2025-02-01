"use client";

import { X } from "lucide-react";
import { Button } from "../ui/button";
import { deleteNote } from "@/app/actions";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface DeleteNoteButtonProps {
  id: string;
}
export const DeleteNoteButton = ({ id }: DeleteNoteButtonProps) => {
  const router = useRouter();

  const handleDelete = () => {
    deleteNote(id);
    router.refresh();
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          title="deletar anotação"
          className="absolute top-2 right-6 z-50"
        >
          <X />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Você está certo disso?</AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação não poderá ser desfeita. Isso excluirá permanentemente sua
            anotação.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
