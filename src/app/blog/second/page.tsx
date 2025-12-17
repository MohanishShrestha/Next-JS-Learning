import { ClientButton } from "@/app/(auth)/layout";

export default async function Secondblog() {

  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div>
      <h1>My Second Blog</h1>
      <ClientButton />
    </div>
  );
}
