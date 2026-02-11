export type InstagramPost = {
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM"
  media_url: string
  id: string,
  thumbnail_url?: string
  permalink: string
  caption: string
}