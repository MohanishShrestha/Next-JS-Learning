import Link from "next/link";

export const metadata = {
  title: "Home Page",
  description: "This is the about Home page",
};

export default function Home() {
  return (
    <>
      <Link href="/products">Go to Products</Link>
      <h1>Welcome guys to home</h1>
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
    </>
  );
}
