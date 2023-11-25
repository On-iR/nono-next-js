"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

export default function SubmitButton({
  label = "Button",
  className,
}: {
  label?: string;
  className: string;
}) {
  const { pending } = useFormStatus();

  return (
    <Button className={className} type="submit" disabled={pending}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {label}
    </Button>
  );
}
