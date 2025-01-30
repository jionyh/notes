"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { ThemeToggle } from "../theme-toggle";

interface UserMenuProps {
  user: {
    email: string;
    name?: string;
  };
}
export const UserMenu = ({ user }: UserMenuProps) => {
  const router = useRouter();

  const name = user.name ?? user.email;
  const email = user.email;

  const handleLogout = async () => {
    await signOut({
      redirect: false,
    });
    router.push("/login");
  };

  const getAvatarFallback = (name: string) => {
    const splittedName = name.split(" ");

    if (splittedName.length === 1) {
      return splittedName[0].charAt(0).toUpperCase();
    }

    const firstLetter = splittedName[0].charAt(0).toUpperCase();
    const lastLetter = splittedName[splittedName.length - 1]
      .charAt(0)
      .toUpperCase();

    return `${firstLetter}${lastLetter}`;
  };
  const avatarFallback = getAvatarFallback(name);
  return (
    <div className="flex items-center gap-5">
      <ThemeToggle />
      <DropdownMenu>
        <DropdownMenuTrigger className="ring-0" asChild>
          <Avatar className="select-none cursor-pointer">
            <AvatarImage src="" />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{email}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>Sair</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
