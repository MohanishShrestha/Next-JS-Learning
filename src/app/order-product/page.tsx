"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();

  const handleClick = () => {
    console.log("Order placed successfully!");
    router.push("/");
  };
  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick} className="border p-2 rounded-xl">
        Place Order
      </button>
    </>
  );
}
