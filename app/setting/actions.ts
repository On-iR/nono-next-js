"use server";

export async function myAction(formData: FormData) {
  console.log(formData.get("name"));
}
