import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const PROJECT_ID = import.meta.env.VITE_APP_PROJECT_ID
const TOKEN = import.meta.env.VITE_APP_SANITY_TOKEN

export const client = sanityClient({
  projectId: PROJECT_ID,
  dataset: 'production',
  apiVersion: 'v1',
  useCdn: true,
  token: TOKEN
})

const builder = imageUrlBuilder(client)

export const urlFor = source => builder.image(source)
