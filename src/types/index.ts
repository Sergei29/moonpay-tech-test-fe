export type CurrencyBase = {
  id: string
  createdAt: string
  updatedAt: string
  type: string
  name: string
  code: string
  precision: number
  maxAmount: number | null
  minAmount: number | null
  minBuyAmount: number | null
  maxBuyAmount: number | null
}

export type Metadata = {
  contractAddress: string | null
  chainId: string | null
  networkCode: string
}

export type Currency = CurrencyBase & {
  addressRegex: string | null
  testnetAddressRegex: string | null
  supportsAddressTag: boolean
  addressTagRegex: string | null
  supportsTestMode: boolean
  supportsLiveMode: boolean
  isSuspended: boolean
  isSupportedInUS: boolean
  notAllowedUSStates: string[]
  notAllowedCountries: string[]
  isSellSupported: boolean
  confirmationsRequired: number | null
  minSellAmount: number | null
  maxSellAmount: number | null
  metadata: Metadata
}
