import Link from "next/link";

export default function f2() {
  return (
    <>
      <Link href={"/f4"}>Go to F4 Page</Link>
      <div>F2 Page </div>
      <Link href={"/f5"}>Go to F5 Page</Link>
    </>
  );
}
