export type Note = {
  id: string;
  title: string;
  content: string;
  isPublic: boolean;
  userId: string;
  createdAt: string;
  updatedAt: string;
  user: {
    id: string;
    name: string;
    avatar?: string;
  };
  permissions: NotePermission[];
};

export type NotePermission = {
  id: string;
  editor: boolean;
  noteId: string;
  userId: string;
  user: {
    id: string;
    name: string;
    avatar?: string;
  };
};
