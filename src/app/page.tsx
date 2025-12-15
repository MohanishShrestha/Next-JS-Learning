import Link from "next/link";

export const metadata = {
  title: "Home Page",
  description: "This is the about Home page",
};

export default function Home() {
  return (
    <>
    <Link href="/products">Go to Products</Link>
      <h1>Welcome guys</h1>
    </>
  );
}
