import { formatDistanceToNow, format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDate(date: string | Date): string {
  const parsedDate = typeof date === "string" ? new Date(date) : date;
  const diffInDays = Math.floor(
    (new Date().getTime() - parsedDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diffInDays < 3) {
    return formatDistanceToNow(parsedDate, { addSuffix: true, locale: ptBR }); // "1 dia atrás", "3 dias atrás"
  }

  return format(parsedDate, "d 'de' MMMM 'de' yyyy", { locale: ptBR }); // "21 de janeiro de 2025"
}
