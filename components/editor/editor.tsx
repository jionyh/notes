"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import type { Editor as EditorType } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import { useEffect } from "react";
import { MenuBar } from "@/components/editor/menu-bar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export const Editor = () => {
  const handleUpdate = ({ editor }: { editor: EditorType }) => {
    const jsonContent = editor.getJSON();
    localStorage.setItem("draft", JSON.stringify(jsonContent));
  };

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
    ],
    onUpdate: handleUpdate,
    editorProps: {
      attributes: {
        class: "focus:outline-none min-h-[100px] bg-primary-foreground p-1",
      },
    },
  });

  const handleDeleteStorage = () => {
    localStorage.removeItem("draft");
    editor?.commands.setContent("");
  };

  useEffect(() => {
    const savedContent = localStorage.getItem("draft");
    if (savedContent && editor) {
      const content = JSON.parse(savedContent);
      editor.commands.setContent(content);
    }
  }, [editor]);

  if (!editor) return null;

  return (
    <div className="border p-4 mt-4 rounded space-y-4 w-full">
      {editor && <MenuBar editor={editor} />}
      <ScrollArea className="h-[45vh] w-full rounded-md border p-4">
        <EditorContent editor={editor} className="prose prose-lg max-w-full" />
      </ScrollArea>
      <div className="flex items-end justify-end space-x-2">
        <Button variant="secondary" onClick={handleDeleteStorage}>
          Limpar nota
        </Button>
        <Button variant="default">Salvar</Button>
      </div>
    </div>
  );
};
