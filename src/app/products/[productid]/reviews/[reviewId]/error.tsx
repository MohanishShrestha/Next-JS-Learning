"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ReviewError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-red-100">
      <h2 className="text-xl font-semibold mb-4 text-red-700">
        Error Loading Review
      </h2>
      <p className="text-red-600">{error.message}</p>
      <button
        onClick={() => reload()}
        className="border bg-green-600 text-white p-2 rounded-xl"
      >
        Try again
      </button>
    </div>
  );
}
