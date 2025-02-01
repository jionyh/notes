import { AlertCircle } from "lucide-react";

interface EmptyMessageProps {
  message: string;
}
export const EmptyMessage = ({ message }: EmptyMessageProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="flex items-center justify-center gap-4">
        <AlertCircle className="h-20 w-20" strokeWidth={1} />
      </div>
      <p className="text-xl font-semibold">{message}</p>
    </div>
  );
};
