import { sanityClient, urlFor } from '../../sanity'
import { isMultiple, dollar, isCap, isPlural } from '../../utils'
import Link from 'next/link'
import Image from '../../components/Image'
import Review from '../../components/Review'
import Maps from '../../components/Maps'


const Property = ({
    title,
    location,
    propertyType,
    mainImage,
    images,
    pricePerNight,
    bed,
    bedroom,
    guest,
    description,
    host,
    reviews
}) => {
    let revAmount = reviews.length;
    console.log({location})
    return(
        <div className="container">
            <div className="header">
                <h1><b>{title}</b></h1>

               <p>{revAmount} review{isMultiple(revAmount)} · Superhost · !!!LOCATION!!!!
                </p>
            </div>
            <div className="image-container">
                <Image identifier="main-image" image={mainImage} alt="images"/>
            
                <div className="sub-images">
                    {images.map(({_key, asset}, image) => <Image key={_key} identifier ='image' image ={asset} />) }

                </div>
            </div>
            <div className="section">
                <div className="info">
                    <h2><p>{isCap(propertyType)} hosted by {host?.name}</p></h2>
                    <p>{guest} guest{isMultiple(guest)} · {bedroom} bedroom{isMultiple(bedroom)} · {bed} bed{isMultiple(bed)}</p>
                    <hr />
                    <span className="notes">
                        <h1>Good to know</h1>
                    
                        <ul>
                            <li><p>• Entire home</p></li>
                            <li><p>• Enhanced clean</p></li>
                            <li><p>• Self check-in</p></li>
                        </ul>
                        <ul>
                        <li><p>• {host?.name} is a Superhost</p></li>
                        <li><p>• Does allow pets upon approval</p></li>
                        </ul>
                
                    </span>
                </div>

                <div className="price-box">
                    <h1>{dollar(pricePerNight)}</h1>
                    <h4>{revAmount} review{isMultiple(revAmount)}</h4>
                    <Link href="/">
                        <div className="button">Change Dates</div>
                    </Link>
                </div>
            </div>
            <hr />
            <div className="description">
                <h1>All about {isPlural(host)}</h1>
                <p>{description}</p>
            </div>

            <hr />
            <div className="bottom">
                <h2>{revAmount} review{isMultiple(revAmount)}</h2>
                {revAmount > 0 && reviews.map((review => <Review key={review._key} review={review}/>))}
                <div className="slug-map">
                <h1>Location</h1>
                <Maps location={location}/>
                </div>
            </div>    
        </div>

    )
}

//* getServerSideProps is an async() that pre-renders data on every request.
//* The context parameter is an object that contains a few keys. Im using `props` (an optional object with the props that are received by the page component), `notFound` (optional boolean that returns 404);
export const getServerSideProps = async(pageContext) => {

    // try the word context instead of pagecontext
    const pageSlug = pageContext.query.slug;

    const query = `*[_type == "property" && slug.current == $pageSlug][0]{
    // client-provided parameter values are substituted into queries before execution. They begin with $ and are followed by a valid identifier. ex: $pageSlug;

        title,
        location,
        propertyType,
        mainImage,
        images,
        pricePerNight,
        bed,
        bedroom,
        guest,
        description,
        host -> {
            _id,
            name,
            slug,
            image
        },
        reviews[]{
            ...,
            traveller-> {
                _id,
                name,
                slug,
                image
            }
        }
    }`

    const property = await sanityClient.fetch(query, { pageSlug })
    
    
    if(!property){
        return{
            props: null,
            notFound: true,
            // ^^^ context props i think
        }
    } else {
        return {
            props: {
                // remember props is an object with the props of a page component.

                title: property.title,
                location: property.location,
                propertyType: property.propertyType,
                mainImage: property.mainImage,
                images: property.images,
                pricePerNight: property.pricePerNight,
                bed: property.bed,
                bedroom: property.bedroom,
                host: property.host,
                description: property.description,
                guest: property.guest,
                reviews: property.reviews,
            }
        }
    }
}

// An async function is a function that knows to expect the possibility that you'll use the await keyword to invoke asynchronous code.
// The async keyword is added to functions to tell them to return a promise rather than directly returning the value.



export default Property

