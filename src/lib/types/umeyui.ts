export type Event = {
  date: string,
  name: string,
  start_time: string,
  end_time: string,
  participants: Participant[]
}

export type Participant = {
  shop_name: string,
  avatar_url: string,
  homepage_avatar_url: string,
  instagram_url: string,
  x_url: string,
  line_url: string,
  facebook_url: string,
}

export type Vendor = {
  id: string,
  bio: string,
  website_url: string,
} & Participant