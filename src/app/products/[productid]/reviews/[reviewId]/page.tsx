import { notFound, redirect } from "next/navigation";
import { parse } from "path";


function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
  }

export default async function ProductReviews({params,}: {
    params: Promise<{ productid: string; reviewId: string}>
}){
   const random = getRandomInt(2);
   if(random === 1){
    throw new Error("Random error occurred" );
   }
    const {productid, reviewId} = await params;

    if(parseInt(reviewId) > 1000){
        // notFound();
        redirect("/products" );
    }
return <h1>ReviewId {reviewId} for product {productid}</h1>
}