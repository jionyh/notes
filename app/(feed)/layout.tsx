import { Header } from "@/components/header/header";
import React from "react";

interface AppLayoutProps {
  children: React.ReactNode;
}
export default async function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className="flex-1 p-6 max-h-dvh  overflow-y-auto no-scrollbar">
        {children}
      </main>
    </div>
  );
}
