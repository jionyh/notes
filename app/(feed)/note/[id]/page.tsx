import { getNoteById } from "@/app/actions";
import { Editor } from "@/components/editor/editor";
import { auth } from "@/lib/auth";

export default async function NoteDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const session = await auth();
  if (!session?.user?.id) return null;

  const note = await getNoteById(id);

  if (!note) return <p>Anotação não encontrada</p>;

  const canEdit = session.user.id === note.user.id;

  return (
    <div className="h-full">
      <Editor edit={canEdit} note={note} />
    </div>
  );
}
