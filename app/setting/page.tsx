"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { myAction } from "./actions";

export default function Setting() {
  return (
    <main>
      <div>これは設定画面です</div>
      <form action={myAction}>
        <Input type="text" name="name" />
        <Button type="submit">Click me</Button>
      </form>
    </main>
  );
}
