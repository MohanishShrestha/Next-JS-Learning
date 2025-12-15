import { Metadata } from "next";

type Props = {
  params: Promise<{ productid: string }>;
};


export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const productId = (await params).productid;
  return {
    title: `Product ${productId} Details`,
    description: `This is the detail page for product ${productId}.`,
  };
}

export default async function ProductDetails({
  params,
}: Props) {
  const productId = (await params).productid;
  return <h1>Detail about product {productId}</h1>;
}
