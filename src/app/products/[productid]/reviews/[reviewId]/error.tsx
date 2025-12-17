"use client"

export default function ReviewError({error}: {error: Error}) {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-red-100">
      <h2 className="text-xl font-semibold mb-4 text-red-700">Error Loading Review</h2>
      <p className="text-red-600">
        {error.message}
      </p>
    </div>
  );
}
