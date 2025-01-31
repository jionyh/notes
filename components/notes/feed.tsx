import { getNotes } from "@/app/actions";
import { Note } from "./note";
import { auth } from "@/lib/auth";

interface FeedProps {
  type: "public" | "private";
}
export const Feed = async ({ type }: FeedProps) => {
  const session = await auth();

  const data = await getNotes(type);
  return (
    <div className="space-y-2">
      {!data && <p>Não há anotações para exibir</p>}
      {data &&
        data.map((note) => (
          <Note
            key={note.id}
            note={note}
            isPublic={note.isPublic}
            userId={session?.user?.id}
          />
        ))}
    </div>
  );
};
