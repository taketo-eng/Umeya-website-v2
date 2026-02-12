import type { MicroCMSQueries, MicroCMSListContent } from "microcms-js-sdk"

export type EventResponse = {
  category: string[],
  title?: string,
  title_en?: string,
  title_de?: string,
  start_time: string,
  end_time: string,
  description?: string,
  description_en?: string,
  description_de?: string,
} & MicroCMSListContent;

export type Event = Omit<EventResponse, "title" | "title_en" | "title_de" | "description" | "description_en" | "description_de" | "category"> & {
  title: string,
  description: string,
  category: string,
};

export type VendorResponse = {
  category: string[],
  profile_image: Image,
  name: string,
  name_en?: string,
  name_de?: string,
  introduction: string,
  introduction_en?: string,
  introduction_de?: string,
  instagram_url?: string,
  facebook_url?: string,
  site_url?: string,
} & MicroCMSListContent;

export type Vendor = Omit<VendorResponse, "name_en" | "name_de" | "introduction_en" | "introduction_de" | "category"> & {
  category: string,
}

type Image = {
  url: string,
  height: number,
  width: number
}
