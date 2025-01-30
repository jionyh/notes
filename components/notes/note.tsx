import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Note as NoteType } from "@/types/note";
import { formatDate } from "@/utils/format-date";

interface NoteProps {
  note: NoteType;
}
export const Note = ({ note }: NoteProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{note.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{note.content}</p>
      </CardContent>
      <CardFooter className="w-full">
        <p className="text-right w-full text-muted-foreground text-xs">
          <span className="text-sm font-semibold">{note.user.name}</span> -{" "}
          {formatDate(note.createdAt)}
        </p>
      </CardFooter>
    </Card>
  );
};
