import type { Event, Vendor } from "./types/umeyui"

export const getEvents = async (): Promise<Event[]> => {
  const response = await fetch(`${import.meta.env.UMEYUI_BASE_URL}public/events`)

  const events: Event[] = (await response.json()).events
  return events
}

export const getPastEvents = async (): Promise<Event[]> => {
  const response = await fetch(`${import.meta.env.UMEYUI_BASE_URL}public/past-events`)

  const events: Event[] = (await response.json()).events
  return events
}

export const getVendors = async (): Promise<Vendor[]> => {
  const response = await fetch(`${import.meta.env.UMEYUI_BASE_URL}public/vendors`)

  const vendors: Vendor[] = (await response.json()).vendors
  return vendors
}