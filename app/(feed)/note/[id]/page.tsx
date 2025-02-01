import { getNoteById } from "@/app/actions";
import { Editor } from "@/components/editor/editor";
import { EmptyMessage } from "@/components/empty-message";
import { auth } from "@/lib/auth";

export default async function NoteDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const session = await auth();
  const note = await getNoteById(id);

  // Se não houver session
  if (!session) {
    if (!note) return <EmptyMessage message="Anotação não encontrada" />;
    if (note.isPublic) return <Editor edit={false} note={note} />;
    return <EmptyMessage message="Anotação privada" />;
  }

  const userId = session?.user?.id;

  if (!note) return <EmptyMessage message="Anotação não encontrada" />;
  const canEdit = userId === note.user.id;

  return (
    <div className="h-full">
      <Editor edit={canEdit} note={note} />
    </div>
  );
}
