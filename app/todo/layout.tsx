import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TODO画面",
  description: "これはToDo画面です。",
};

export default function TodoLayout({
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
