"use server";

import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
});

export async function myAction(formData: FormData) {
  const parsed = schema.safeParse({
    name: formData.get("name"),
  });

  if (parsed.success) {
    console.log(parsed.data.name);
  } else {
    console.log(parsed.error.message);
  }
}
