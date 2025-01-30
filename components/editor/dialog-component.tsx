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

export const DialogComponent = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Nova nota</Button>
      </DialogTrigger>
      <DialogContent className="max-w-fit overflow-y-auto max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Adicionar nova Nota</DialogTitle>
          <DialogDescription>
            <Editor />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
