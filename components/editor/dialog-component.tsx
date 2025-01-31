"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Editor } from "./editor";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const DialogComponent = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const closeModal = () => {
    setOpen(false);
    router.refresh();
  };
  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>Nova Anotação</Button>
      </DialogTrigger>
      <DialogContent className="max-w-fit overflow-y-auto min-h-[90vh] max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Adicionar nova Nota</DialogTitle>
          <DialogDescription className="h-full">
            <Editor dialogClose={closeModal} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
