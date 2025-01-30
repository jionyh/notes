import { Note } from "./note";
import { notes } from "@/data/notes";

interface NotesFeedProps {
  type: "general" | "personal" | "team";
}
export const NotesFeed = ({ type = "general" }: NotesFeedProps) => {
  const data = notes;
  return (
    <div className="space-y-1">
      {data.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};
