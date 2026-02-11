import type { MicroCMSQueries, MicroCMSListContent } from "microcms-js-sdk"
import { createClient } from "microcms-js-sdk"
import type { Event } from "./types/microcms"

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
})



export const getSchedules = async (queries?: MicroCMSQueries) => {
  return await client.getList<Event>({ endpoint: "schedules", queries })
}