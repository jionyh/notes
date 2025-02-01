import { formatDate } from "@/utils/format-date";
import { CardFooter } from "../ui/card";

interface NoteFooterProps {
  name: string | null;
  date: Date;
}
export const NoteFooter = ({ name = "", date }: NoteFooterProps) => {
  return (
    <CardFooter
      className="w-full flex items-end justify-end text-right text-muted-foreground text-xs "
      suppressHydrationWarning
    >
      <p className="font-bold">{name}</p> - {formatDate(date)}
    </CardFooter>
  );
};
