"use client";
import { deleteNote } from "@/app/actions";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Note as NoteType } from "@/types/note";
import { formatDate } from "@/utils/format-date";
import { shortNote } from "@/utils/short-note";
import { Globe, GlobeLock, X } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface NoteProps {
  note: NoteType;
  isPublic: boolean;
  userId?: string;
}
export const Note = ({ note, isPublic = false, userId }: NoteProps) => {
  const canDelete = userId === note.userId;
  const router = useRouter();

  const handleDelete = (id: string) => {
    deleteNote(id);
    router.refresh();
  };

  return (
    <Card className=" mb-2">
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
          {canDelete && (
            <Button
              size="icon"
              variant="outline"
              title="deletar anotação"
              onClick={() => handleDelete}
            >
              <X />
            </Button>
          )}
        </CardTitle>
      </CardHeader>

      <Link href={`/note/${note.id}`}>
        <CardContent>
          <div
            dangerouslySetInnerHTML={{ __html: shortNote(note.content) }}
            className="text-muted-foreground"
          />
        </CardContent>
        <CardFooter className="w-full">
          <p className="text-right w-full text-muted-foreground text-xs">
            <strong>{note.user.name}</strong> - {formatDate(note.createdAt)}
          </p>
        </CardFooter>
      </Link>
    </Card>
  );
};
