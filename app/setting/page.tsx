"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { saveSetting } from "./actions";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import SubmitButton from "@/components/SubmitButton";

export default function Setting() {
  return (
    <main>
      <div>これは設定画面です</div>
      <form action={saveSetting}>
        <Input type="text" name="name" />
        <SubmitButton />
      </form>
    </main>
  );
}
