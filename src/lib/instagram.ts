import type { InstagramPost } from "./types/instagram"
import fs from 'node:fs/promises'
import path from 'node:path'

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

const IMAGE_DIR = path.join(process.cwd(), 'public', 'instagram');

export const getAndDownloadInstagramPosts = async () => {
  try {
    // call API
    const target = `${import.meta.env.INSTAGRAM_ACCESS_URL}${import.meta.env.INSTAGRAM_ID}/media?fields=id,caption,permalink,thumbnail_url,media_type,media_url&limit=${NUM_POSTS}&access_token=${import.meta.env.INSTAGRAM_ACCESS_TOKEN}`;

    const res = await fetch(target);
    if (!res.ok) {
      throw new Error('Failed to fetch data; Message');
    }

    const json = await res.json()
    let list = json.data as InstagramPost[]

    if (list.length > NUM_POSTS) {
      list = list.slice(0, NUM_POSTS)
    }

    await fs.mkdir(IMAGE_DIR, { recursive: true })

    const currentImageFilenames = list.map((post) => `${post.id}.jpg`)
    try {
      const existingFiles = await fs.readdir(IMAGE_DIR)
      for (const file of existingFiles) {
        if (file.endsWith('.jpg') && !currentImageFilenames.includes(file)) {
          await fs.unlink(path.join(IMAGE_DIR, file))
        }
      }
    } catch (err) {
      console.warn('Failed to cleanup old images', err);
    }

    const postsWithLocalImages = await Promise.all(list.map(async (post) => {
      const imgUrl = post.media_type !== "VIDEO" ? post.media_url : post.thumbnail_url

      if (!imgUrl) return post;

      const filename = `${post.id}.jpg`
      const filePath = path.join(IMAGE_DIR, filename)

      let fileExists = false
      try {
        await fs.access(filePath)
        fileExists = true
      }
      catch {
        fileExists = false
      }

      if (!fileExists) {
        const imgRes = await fetch(imgUrl)
        if (imgRes.ok) {
          const arrayBuffer = await imgRes.arrayBuffer()
          const buffer = Buffer.from(arrayBuffer)
          await fs.writeFile(filePath, buffer)
        }
        else {
          console.error(`Failed to download image for post ${post.id}`)
        }
      }

      return {
        ...post,
        local_image_path: `/instagram/${filename}`
      }
    }))

    return postsWithLocalImages
  }
  catch (err) {
    console.error('Error fetching or processing Instagram posts:', err)
    return null
  }

}
