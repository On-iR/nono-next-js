import Link from "next/link";

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/todo" className="underline">
          Todo画面
        </Link>
      </li>
      <li>
        <Link href="/setting" className="underline">
          設定画面
        </Link>
      </li>
    </ul>
  );
}
