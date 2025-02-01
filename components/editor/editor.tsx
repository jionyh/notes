"use client";
import { MenuBar } from "@/components/editor/menu-bar";
import { SetPublicNote } from "@/components/editor/set-public-note";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ChevronLeft } from "lucide-react";
import { useEditorLogic } from "@/hooks/use-editor";
import { EditorContent } from "@tiptap/react";

interface EditorProps {
  edit?: boolean;
  note?: {
    id?: string;
    content?: string;
    title?: string;
    isPublic?: boolean;
  };
  dialogClose?: () => void;
}
export const Editor = ({ edit = true, note, dialogClose }: EditorProps) => {
  const {
    editor,
    cleanStates,
    error,
    handleSubmit,
    isPublic,
    setIsPublic,
    setTitle,
    title,
    router,
  } = useEditorLogic({ edit, note, dialogClose });

  return (
    <div className="flex flex-col rounded space-y-4 w-full h-full">
      <div className="flex items-center justify-between">
        {note?.id && (
          <Button
            size="icon"
            variant="outline"
            title="voltar"
            onClick={() => router.back()}
          >
            <ChevronLeft />
          </Button>
        )}
        <Label className="flex items-center space-x-4">
          <span className="w-fit">Título da nota:</span>
          <Input
            placeholder="Título"
            value={title}
            disabled={!edit}
            onChange={(e) => setTitle(e.target.value)}
            className="w-72 placeholder:text-acc focus:outline-none focus:ring-0"
          />
          {error.title && <p className="text-xs text-red-500">{error.title}</p>}
        </Label>
        <SetPublicNote
          isDisabled={!edit}
          action={setIsPublic}
          isPublic={isPublic}
        />
        <div className="flex items-end justify-end space-x-2">
          <Button variant="secondary" disabled={!edit} onClick={cleanStates}>
            Limpar nota
          </Button>
          <Button variant="default" disabled={!edit} onClick={handleSubmit}>
            {note?.id ? "Atualizar" : "Salvar"}
          </Button>
        </div>
      </div>

      {editor && <MenuBar isDisabled={!edit} editor={editor} />}
      {error.content && <p className="text-xs text-red-500">{error.content}</p>}
      <ScrollArea className={`flex-1 w-full rounded-md border p-4`}>
        <EditorContent
          editor={editor}
          className="prose dark:prose-invert prose-hr:m-0 max-w-full prose-li:marker:primary"
        />
      </ScrollArea>
    </div>
  );
};
