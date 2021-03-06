import { urlFor } from "../sanity"

const Image = ( {Identifier, image }) => {
    return(
        <div className={Identifier === "main-image" ? "main-image" : "image"}>

        <img src={urlFor(image).auto('format')} alt="img"/>

        </div>

    //  use img and urlFor

    )
}

export default Image