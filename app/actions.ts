"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Note } from "@/types/note";

export const createNote = async ({
  title,
  content,
  isPublic = false,
}: {
  title: string;
  content: string;
  isPublic?: boolean;
}) => {
  const session = await auth();
  if (!session?.user?.id) return null;

  const note = await prisma.note.create({
    data: {
      title,
      content,
      userId: session.user.id,
      isPublic,
    },
  });

  return note;
};

export const getNotes = async (
  type: "public" | "private"
): Promise<Note[] | null> => {
  const session = await auth();
  if (!session?.user?.id) return null;

  const isPublicNotes = type === "public";

  const publicNotes = await prisma.note.findMany({
    where: { isPublic: true },
    include: {
      user: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  const privateNotes = await prisma.note.findMany({
    where: { userId: session.user.id },
    include: {
      user: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  return isPublicNotes ? publicNotes : privateNotes;
};

export const getNoteById = async (id: string) => {
  const note = await prisma.note.findUnique({
    where: { id },
    include: {
      user: true,
    },
  });

  return note;
};

export const updateNote = async (
  id: string,
  {
    title,
    content,
    isPublic,
  }: { title: string; content: string; isPublic: boolean }
) => {
  return await prisma.note.update({
    where: { id },
    data: {
      content,
      title,
      isPublic,
    },
  });
};

export const deleteNote = async (id: string) => {
  const session = await auth();
  if (!session?.user?.id) return null;

  return await prisma.note.delete({ where: { id, userId: session.user.id } });
};
