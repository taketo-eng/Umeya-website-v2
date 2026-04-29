import type { UiKey } from "../../i18n/ui"

export type Event = {
  date: string,
  name?: string,
  start_time: string,
  end_time: string,
  participants: Participant[]
}

export type Participant = {
  shop_name: string,
  avatar_url?: string,
}

export type Vendor = {
  id: string,
  category: VendorCategory,
  homepage_bio: string,
  homepage_avatar_url?: string,
  website_url?: string,
  instagram_url?: string,
  x_url?: string,
  line_url?: string,
  facebook_url?: string,
} & Participant

export type CategoryMeta = {
  labelKey: UiKey;
  color: string;
  icon?: string;
}

export type VendorCategory =
  "その他" | "飲食・ドリンク" | "スイーツ・パン" | "ハンドメイド・クラフト" | "アクセサリー・ジュエリー" | "衣類・ファッション" |
  "雑貨・インテリア" | "植物・フラワー" | "アート・イラスト" | "音楽・パフォーマンス" | "ワークショップ" | "セミナー"