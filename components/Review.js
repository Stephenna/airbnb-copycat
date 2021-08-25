import { urlFor } from '../sanity'
 const Review = ( {review} ) => {
    return (
        <div className="review-box">
            
            <img src={urlFor(review.traveller.image).auto('format')}/>
            <div className="review-info">
                <h3>{review.traveller.name}</h3>
                <h2>{review.rating}</h2>
                <p>{review.reviewDescription}</p>
            </div>    
        </div>
    )
}

export default Review