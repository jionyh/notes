import { useState, useEffect } from "react";
import { useEditor } from "@tiptap/react";
import type { Editor as EditorType } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import { useRouter } from "next/navigation";
import { createNote, updateNote } from "@/app/actions";

const defaultErrorMessage = { title: "", content: "" };

interface UseEditorLogicProps {
  edit: boolean;
  note?: {
    id?: string;
    content?: string;
    title?: string;
    isPublic?: boolean;
  };
  dialogClose?: () => void;
}

export const useEditorLogic = ({
  edit,
  dialogClose,
  note,
}: UseEditorLogicProps) => {
  const [title, setTitle] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [error, setError] = useState(defaultErrorMessage);
  const router = useRouter();

  /* Atualiza o localStorage */
  const updateLocalStorage = ({ editor }: { editor: EditorType }) => {
    const editorData = {
      title,
      isPublic,
      content: editor.getHTML(),
    };

    localStorage.setItem("draft", JSON.stringify(editorData));
  };

  /* Limpa o editor e o localStorage */
  const cleanStates = () => {
    if (!editor) return;
    setTitle("");
    setIsPublic(false);
    setError(defaultErrorMessage);
    editor.commands.setContent("");
    localStorage.removeItem("draft");
  };

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      TextStyle,
      Color,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    onUpdate: updateLocalStorage,
    editorProps: {
      editable: () => edit,
      attributes: {
        class:
          "focus:outline-none min-h-[100px] p-1 bg-background text-foreground ",
      },
    },
  });

  const handleSubmit = async () => {
    if (!editor) return;
    setError(defaultErrorMessage);

    const content = editor.getHTML().trim();
    if (!title) return setError({ ...error, title: "Título é obrigatório" });
    if (!content)
      return setError({ ...error, content: "Conteúdo da nota é obrigatório" });

    if (note?.id) {
      await updateNote(note.id, { title, content, isPublic });
      cleanStates();
      router.back();
      /*router.refresh() */
      setTimeout(() => {
        window.location.reload();
      }, 100);
    } else {
      await createNote({ title, content, isPublic });
      cleanStates();
      router.refresh();
      dialogClose?.();
    }
  };

  useEffect(() => {
    if (note) {
      setTitle(note.title || "");
      setIsPublic(note.isPublic || false);
      editor?.commands.setContent(note.content || "");
    } else {
      const savedContent = localStorage.getItem("draft");
      if (savedContent && editor) {
        const { title, isPublic, content } = JSON.parse(savedContent);
        setTitle(title);
        setIsPublic(isPublic);
        editor.commands.setContent(content);
      }
    }
  }, [editor, note]);

  return {
    editor,
    title,
    setTitle,
    isPublic,
    setIsPublic,
    error,
    handleSubmit,
    cleanStates,
    router,
  };
};
