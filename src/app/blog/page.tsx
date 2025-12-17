export default async function blog(){
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return <h1>My Blog</h1>
}