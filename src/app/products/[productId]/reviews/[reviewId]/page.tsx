//src/app/products/[productId]/page.tsx
type Props = {
    params: {
        productId: string
        reviewId: string
    }
}

export default function ProductReviews({ params }: Props) {
    return (
        <div>
            <h1>Product Reviews</h1><br></br>
            <h2>Product : {params.productId}</h2>
            <h2>Review : {params.reviewId}</h2>
        </div>
    );
}