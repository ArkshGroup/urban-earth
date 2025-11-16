import { CollectionSlug, FieldHook, getPayload } from 'payload'
import config from '@/payload.config'

const format = (val: string): string =>
  val
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-/, '')
    .replace(/-$/, '')

async function isNameFound(name: string, collection: CollectionSlug): Promise<boolean> {
  try {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({
      collection: collection,
      where: { slug: { equals: name } },
    })
    if (docs.length > 0) return true
    return false
  } catch (err) {
    console.error(`Collection "${collection}" not found or error in find operation:`, err)
    return false
  }
}

async function getUniqueSlug(slug: string, collection: CollectionSlug) {
  let i = 2
  let isFound = await isNameFound(slug, collection)
  const regex = /^.*-\d+$/
  while (isFound) {
    if (regex.test(slug)) {
      const match = slug.match(regex)
      if (match) {
        i = parseInt(match[0].split('-').pop() ?? '2') + 1
      }
      slug = slug.replace(/\d+$/, '')
      slug += `${i}`
    } else {
      slug += `-${i}`
    }
    isFound = await isNameFound(slug, collection)
  }
  return slug
}

const formatSlug =
  (collection: CollectionSlug): FieldHook =>
  ({ operation, value, originalDoc, data }) => {
    if (operation === 'create' || operation === 'update') {
      if (originalDoc.name === data?.name) {
        return value
      }
      return getUniqueSlug(format(data?.name), collection)
    }
    return value
  }

export default formatSlug
