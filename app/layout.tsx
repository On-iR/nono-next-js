import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
