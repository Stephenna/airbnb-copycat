import { createClient, createImageUrlBuilder, } from 'next-sanity'

const config = {
    apiVersion: "v2021-06-07",

    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === "production",
}

export const sanityClient = createClient(config);


export const urlFor = (source) => createImageUrlBuilder(config).image(source)

