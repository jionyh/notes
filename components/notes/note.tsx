"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Note as NoteType } from "@/types/note";
import { shortNote } from "@/utils/short-note";
import { Globe, GlobeLock } from "lucide-react";
import Link from "next/link";
import { DeleteNoteButton } from "./delete-note-button";
import { useEffect, useState } from "react";
import { NoteFooter } from "./note-footer";
import { NoteSkeleton } from "../skeletons/note-skeleton";

interface NoteProps {
  note: NoteType;
  isPublic: boolean;
  userId?: string;
}
export const Note = ({ note, isPublic = false, userId }: NoteProps) => {
  const [isClient, setIsClient] = useState(false);
  const canDelete = userId === note.userId;

  useEffect(() => {
    /* Aqui define que o componente foi renderizado no cliente */
    setIsClient(true);
  }, []);

  return (
    <div className="mb-2 relative px-4">
      {/* Esse componente estava com erro de hidratação, então foi criado um skeleton e o componente é exibido
          após confirmar que o cliente está carregado
       */}
      {isClient ? (
        <>
          <Link href={`/note/${note.id}`}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-muted-foreground font-bold text-xl">
                    {isPublic ? (
                      <Globe className="h-5 w-5" />
                    ) : (
                      <GlobeLock className="h-5 w-5" />
                    )}
                    {note.title}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  dangerouslySetInnerHTML={{ __html: shortNote(note.content) }}
                  className="text-muted-foreground"
                />
              </CardContent>
              <NoteFooter name={note.user.name} date={note.updatedAt} />
            </Card>
          </Link>
          {canDelete && <DeleteNoteButton id={note.id} />}
        </>
      ) : (
        <NoteSkeleton />
      )}
    </div>
  );
};
