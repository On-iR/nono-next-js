import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "設定画面",
  description: "これは設定画面です。",
};

export default function SettingLayout({
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
