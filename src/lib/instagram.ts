import type { InstagramPost } from "./types/instagram"

const NUM_POSTS = 12

export const getInstagramPosts = async () => {
  try {
    const target = `${import.meta.env.INSTAGRAM_ACCESS_URL}${import.meta.env.INSTAGRAM_ID}/media?fields=caption,permalink,thumbnail_url,media_type,media_url&limit=12&access_token=${import.meta.env.INSTAGRAM_ACCESS_TOKEN}`
    const res = await fetch(target)
    if (!res.ok) {
      throw new Error('Failed to fetch data; Message')
    }
    const json = await res.json()
    var list = json.data as InstagramPost[]
    if (list.length > NUM_POSTS) {
      list = list.slice(0, NUM_POSTS)
    }
    return list
  } catch (err) {
    return null
  }
}
