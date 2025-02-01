"use client";

import React from "react";
import { ToastContainer } from "react-toastify";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function MainProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NextThemesProvider
        attribute="class"
        defaultTheme="light"
        disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
      <ToastContainer />
    </>
  );
}
