"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import type { Editor as EditorType } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";

import { useEffect, useState } from "react";
import { MenuBar } from "@/components/editor/menu-bar";
import { SetPublicNote } from "@/components/editor/set-public-note";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { createNote } from "@/app/actions";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

const defaultErrorMessage = {
  title: "",
  content: "",
};
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
  const [title, setTitle] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [error, setError] = useState(defaultErrorMessage);
  const router = useRouter();

  const handleUpdate = ({ editor }: { editor: EditorType }) => {
    const editorData = {
      title,
      isPublic,
      content: editor.getHTML(),
    };

    localStorage.setItem("draft", JSON.stringify(editorData));
  };

  const cleanStates = () => {
    if (!editor) return;
    setTitle("");
    setIsPublic(false);
    setError(defaultErrorMessage);
    editor.commands.setContent("");
  };

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      TextStyle,
      Color,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
    ],
    onUpdate: handleUpdate,
    editorProps: {
      editable: () => edit,
      attributes: {
        class:
          "focus:outline-none min-h-[100px] p-1 bg-background text-foreground",
      },
    },
  });

  const handleDeleteStorage = () => {
    if (!editor) return;
    localStorage.removeItem("draft");
    cleanStates();
  };

  const sanitizeContent = (html: string) => {
    /* Regex para limpar tag vazia. O Tiptap mesmo sem nenhum conteudo cria uma tag <p></p> */
    const cleaned = html.replace(/<[^>]+>/g, "").trim();
    return cleaned.length > 0 ? html : "";
  };

  const handleSave = async () => {
    setError(defaultErrorMessage);
    if (!editor) return;
    const content = sanitizeContent(editor.getHTML());
    if (!title) {
      setError({ ...error, title: "Título é obrigatório" });
      return;
    }
    if (!content) {
      setError({ ...error, content: "Conteúdo da nota é obrigatório" });
      return;
    }

    await createNote({ title, content, isPublic });
    cleanStates();
    if (dialogClose) {
      dialogClose();
    }
  };

  useEffect(() => {
    const savedContent = localStorage.getItem("draft");
    if (savedContent && editor && !note?.id) {
      const { title, isPublic, content } = JSON.parse(savedContent);
      editor.commands.setContent(content);
      setTitle(title);
      setIsPublic(isPublic);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor]);

  useEffect(() => {
    if (!editor) return;
    if (note) {
      if (note.content) {
        editor.commands.setContent(note?.content);
      }
      if (note.title) {
        setTitle(note.title);
      }
      if (note.isPublic) {
        setIsPublic(note.isPublic);
      }
    }

    return;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [note, editor]);

  if (!editor) return null;

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
          <p className="w-fit">Título da nota:</p>
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
          <Button
            variant="secondary"
            disabled={!edit}
            onClick={handleDeleteStorage}
          >
            Limpar nota
          </Button>
          <Button variant="default" disabled={!edit} onClick={handleSave}>
            {note?.id ? "Atualizar" : "Salvar"}
          </Button>
        </div>
      </div>

      {editor && <MenuBar isDisabled={!edit} editor={editor} />}
      {error.content && <p className="text-xs text-red-500">{error.content}</p>}
      <ScrollArea className={`flex-1 w-full rounded-md border p-4`}>
        <EditorContent editor={editor} className="prose prose-lg max-w-full" />
      </ScrollArea>
    </div>
  );
};
