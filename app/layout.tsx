import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import ToastProvider from "@/providers/ToastProvider";
import StoreModal from "@/components/modals/StoreModal";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Dashboard for E-Commerce",
  description: "Created by @emaadev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToastProvider />
          <StoreModal />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
