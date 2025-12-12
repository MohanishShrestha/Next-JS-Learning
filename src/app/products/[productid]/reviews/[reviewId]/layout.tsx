export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <h2 className="text-xl font-semibold mb-4">Product Review Details</h2>
      <div>{children}</div>
      <h2 className="text-red-600">Feature Products</h2>
    </div>
  );
}
