import { notFound } from "next/navigation";
import { parse } from "path";

export default async function ProductReviews({params,}: {
    params: Promise<{ productid: string; reviewId: string}>
}){
    const {productid, reviewId} = await params;

    if(parseInt(reviewId) > 1000){
        notFound();
    }
return <h1>ReviewId {reviewId} for product {productid}</h1>
}