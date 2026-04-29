import type { CategoryMeta, Event, Vendor, VendorCategory } from "./types/umeyui"

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

export const categoryLocaleKeyMap: Record<VendorCategory, CategoryMeta> = {
  "飲食・ドリンク": {
    labelKey: "vendor.category.food",
    color: "#C21244",
  },
  "スイーツ・パン": {
    labelKey: "vendor.category.sweets",
    color: "#B63A50",
  },
  "ハンドメイド・クラフト": {
    labelKey: "vendor.category.handmade",
    color: "#A63A50",
  },
  "アクセサリー・ジュエリー": {
    labelKey: "vendor.category.accessory",
    color: "#8C6A1A",
  },
  "衣類・ファッション": {
    labelKey: "vendor.category.fashion",
    color: "#8B1E3F",
  },
  "雑貨・インテリア": {
    labelKey: "vendor.category.interior",
    color: "#B76E79",
  },
  "植物・フラワー": {
    labelKey: "vendor.category.flower",
    color: "#6A994E",
  },
  "アート・イラスト": {
    labelKey: "vendor.category.art",
    color: "#9D4EDD",
  },
  "音楽・パフォーマンス": {
    labelKey: "vendor.category.performance",
    color: "#3A0CA3",
  },
  "ワークショップ": {
    labelKey: "vendor.category.workshop",
    color: "#C76B2C",
  },
  "セミナー": {
    labelKey: "vendor.category.seminar",
    color: "#457B9D",
  },
  "その他": {
    labelKey: "vendor.category.other",
    color: "#6B7280",
  },
};