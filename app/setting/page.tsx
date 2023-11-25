"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { saveSetting } from "./actions";
import SubmitButton from "@/components/SubmitButton";

export default function Setting() {
  return (
    <main>
      <h1 className="font-bold">設定画面</h1>
      <form className="m-10" action={saveSetting}>
        <div className="grid w-full max-w-md items-center gap-2">
          <Label>名前</Label>
          <Input type="text" name="name" />
          <Label>年齢</Label>
          <Input type="number" name="name" />
          <SubmitButton className="mt-5" label="保存" />
        </div>
      </form>
    </main>
  );
}
