export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productid: string }>;
}) {
  const productId = (await params).productid;
  return <h1>Detail about product {productId}</h1>;
}
