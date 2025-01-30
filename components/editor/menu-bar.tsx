"use client";
import type { Editor } from "@tiptap/react";
import {
  Bold,
  Italic,
  Strikethrough,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  Trash2,
  Undo,
  Redo,
  MessageSquareQuote,
  SeparatorHorizontal,
  WrapText,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Heading3,
} from "lucide-react";
import { PiCodeBlock, PiCode } from "react-icons/pi";
import MenuItem from "./menu-item";
import React from "react";
import { Separator } from "../ui/separator";

interface MenuBarProps {
  editor: Editor;
}
export const MenuBar = ({ editor }: MenuBarProps) => {
  const items = [
    {
      icon: <Bold className="w-5 h-5" />,
      title: "Negrito",
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: () => editor.isActive("bold"),
    },
    {
      icon: <Italic className="w-5 h-5" />,
      title: "Itálico",
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: () => editor.isActive("italic"),
    },
    {
      icon: <Strikethrough className="w-5 h-5" />,
      title: "Sublinhado",
      action: () => editor.chain().focus().toggleStrike().run(),
      isActive: () => editor.isActive("strike"),
    },
    { space: true },
    {
      icon: <AlignLeft className="w-5 h-5" />,
      title: "Alinhar à esquerda",
      action: () => editor.chain().focus().setTextAlign("left").run(),
    },
    {
      icon: <AlignCenter className="w-5 h-5" />,
      title: "Alinhar ao centro",
      action: () => editor.chain().focus().setTextAlign("center").run(),
    },
    {
      icon: <AlignRight className="w-5 h-5" />,
      title: "Alinhar à direita",
      action: () => editor.chain().focus().setTextAlign("right").run(),
    },
    {
      icon: <AlignJustify className="w-5 h-5" />,
      title: "Justificar",
      action: () => editor.chain().focus().setTextAlign("justify").run(),
    },
    {
      icon: <WrapText className="w-5 h-5" />,
      title: "Quebrar Linha",
      action: () => editor.chain().focus().setHardBreak().run(),
    },
    { space: true },
    {
      icon: <Heading1 className="w-5 h-5" />,
      title: "Titulo 1",
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: () => editor.isActive("heading", { level: 1 }),
    },
    {
      icon: <Heading2 className="w-5 h-5" />,
      title: "Titulo 2",
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: () => editor.isActive("heading", { level: 2 }),
    },
    {
      icon: <Heading3 className="w-5 h-5" />,
      title: "Titulo 3",
      action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: () => editor.isActive("heading", { level: 3 }),
    },
    { space: true },
    {
      icon: <List className="w-5 h-5" />,
      title: "Lista",
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: () => editor.isActive("bulletList"),
    },
    {
      icon: <ListOrdered className="w-5 h-5" />,
      title: "Lista Ordenada",
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: () => editor.isActive("orderedList"),
    },
    { space: true },
    {
      icon: <PiCode className="w-5 h-5" />,
      title: "Código",
      action: () => editor.chain().focus().toggleCode().run(),
      isActive: () => editor.isActive("code"),
    },
    {
      icon: <PiCodeBlock className="w-5 h-5" />,
      title: "Bloco de código",
      action: () => editor.chain().focus().toggleCodeBlock().run(),
      isActive: () => editor.isActive("codeBlock"),
    },
    {
      icon: <MessageSquareQuote className="w-5 h-5" />,
      title: "Citação",
      action: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: () => editor.isActive("blockquote"),
    },
    { space: true },
    {
      icon: <SeparatorHorizontal className="w-5 h-5" />,
      title: "Linha Horizontal",
      action: () => editor.chain().focus().setHorizontalRule().run(),
    },

    {
      icon: <Trash2 className="w-5 h-5" />,
      title: "Limpar Formatação",
      action: () => editor.chain().focus().clearNodes().unsetAllMarks().run(),
    },
    {
      icon: <Undo className="w-5 h-5" />,
      title: "Voltar",
      action: () => editor.chain().focus().undo().run(),
    },
    {
      icon: <Redo className="w-5 h-5" />,
      title: "Avançar",
      action: () => editor.chain().focus().redo().run(),
    },
  ];
  return (
    <div className="flex space-x-1 h-10 items-center justify-center">
      {items.map((item, index) =>
        item.space ? (
          <div key={index} className="p-2">
            <Separator
              orientation="vertical"
              className="h-5 space-x-4 bg-primary"
            />
          </div>
        ) : (
          <MenuItem key={index} {...item} />
        )
      )}
    </div>
  );
};
