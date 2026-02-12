import type { MicroCMSQueries, MicroCMSListContent } from "microcms-js-sdk"
import { createClient } from "microcms-js-sdk"
import type { VendorResponse, Event, Vendor, EventResponse } from "./types/microcms"

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
})



export const getSchedules = async (locale: string = "ja", queries?: MicroCMSQueries) => {
  var data = await client.getList<EventResponse>({ endpoint: "schedules", queries })

  const schedules: Event[] = []
  data.contents.forEach((item) => {
    if (locale === "ja") {
      schedules.push({ ...item, category: item.category[0], title: item.title ?? "オープン日", description: item.description ?? "" })
    }
    else if (locale === "en") {
      schedules.push({
        ...item,
        category: item.category[0],
        title: item.title_en ?? item.title ?? "Open Day",
        description: item.description_en ?? item.description ?? "",
      })
    }
    else if (locale === "de") {
      schedules.push({
        ...item,
        category: item.category[0],
        title: item.title_de ?? item.title ?? "Eröffnungstag",
        description: item.description_de ?? item.description ?? "",
      })
    }
  })
  return schedules
}

export const getVendors = async (locale: string = "ja", queries?: MicroCMSQueries) => {
  const data = await client.getList<VendorResponse>({ endpoint: "vendors", queries })
  const vendors: Vendor[] = []
  data.contents.forEach((item) => {
    if (locale === "ja") {
      vendors.push({ ...item, category: item.category[0] })
    }
    else if (locale === "en") {
      vendors.push({
        ...item,
        category: item.category[0],
        name: item.name_en ?? item.name,
        introduction: item.introduction_en ?? item.introduction,
      })
    }
    else if (locale === "de") {
      vendors.push({
        ...item,
        category: item.category[0],
        name: item.name_de ?? item.name,
        introduction: item.introduction_de ?? item.introduction,
      })
    }
  })
  return vendors
}