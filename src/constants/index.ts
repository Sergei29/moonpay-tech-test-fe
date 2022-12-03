export const DELAY = {
  MINUTES_10: 600_000,
  MINUTES_15: 900_000,
  MINUTES_30: 1_800_000,
  HOUR_1: 3_600_000,
} as const

export const NEXT_PUBLIC_MOONPAY_API_URI =
  process.env.NEXT_PUBLIC_MOONPAY_API_URI || ""

export const queryKeys = {
  currencies: "currencies",
} as const
