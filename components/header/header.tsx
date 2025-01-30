import { Separator } from "../ui/separator";
import { UserMenu } from "./user-menu";
import { auth } from "@/lib/auth";

export const Header = async () => {
  const session = await auth();

  const user = {
    name: session?.user?.name ?? "",
    email: session?.user?.email ?? "",
  };
  return (
    <header className="h-20 flex flex-col sticky top-0 z-10 bg-background">
      <div className="flex-1 flex items-center justify-between px-4">
        <h1>Dev Notes</h1>
        <div className="flex items-center gap-5">
          <UserMenu user={user} />
        </div>
      </div>
      <Separator />
      <div></div>
    </header>
  );
};
