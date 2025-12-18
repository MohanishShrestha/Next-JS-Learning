import Link from "next/link";

export default function f1() {
  return (
    <>
      <div>
        <div>F1 Page</div>

        <Link href={"/f1/f2"}>Go to F2 Page</Link>
        <Link href={"/f3"}>Go to F3 Page</Link>
      </div>
    </>
  );
}
