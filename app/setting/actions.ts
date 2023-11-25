"use server";

import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
});

export async function saveSetting(formData: FormData) {
  const parsed = schema.safeParse({
    name: formData.get("name"),
  });

  if (parsed.success) {
    const sleep = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));
    await sleep(5000);
    console.log(parsed.data.name);
  } else {
    console.log(parsed.error.message);
  }
}
