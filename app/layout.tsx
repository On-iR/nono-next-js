import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link";
import { ApertureIcon } from "lucide-react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ホーム画面",
  description: "これはホーム画面です。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="jp">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <Link href="/">ホーム</Link>
            </MenubarTrigger>
            <MenubarTrigger>
              <Link href="/todo">Todo</Link>
            </MenubarTrigger>
            <MenubarTrigger>
              <Link href="/setting">設定</Link>
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>
        <div className="container mx-auto py-4">{children}</div>
      </body>
    </html>
  );
}
