import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import { Header } from "@/components/header/header";
import React from "react";

interface AppLayoutProps {
  children: React.ReactNode;
}
export default async function AppLayout({ children }: AppLayoutProps) {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }
  return (
    <div className="">
      <Header />
      <main className="p-6 max-h-dvh  overflow-y-auto no-scrollbar ">
        {children}
      </main>
    </div>
  );
}
