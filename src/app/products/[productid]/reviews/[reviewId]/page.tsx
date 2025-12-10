export default async function ProductReviews({params,}: {
    params: Promise<{ productid: string; reviewId: string}>
}){
    const {productid, reviewId} = await params
return <h1>ReviewId {reviewId} for product {productid}</h1>
}