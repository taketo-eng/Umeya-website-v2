import type { MicroCMSQueries, MicroCMSListContent } from "microcms-js-sdk"

export type Event = {
  category: string[],
  title?: string,
  start_time: string,
  end_time: string,
  description?: string,
} & MicroCMSListContent;
