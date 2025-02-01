import { User } from "./user";

export type Note = {
  id: string;
  title: string;
  content: string;
  isPublic: boolean;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  user: User;
};
