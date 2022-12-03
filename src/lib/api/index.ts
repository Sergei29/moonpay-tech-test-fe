import { NEXT_PUBLIC_MOONPAY_API_URI, queryKeys } from "@/constants"

/**
 * @description fetching list of all currencies from the MoonPay API
 * @returns {Promise<Array>} promise resolving to the list for currencies
 */
export const fetchMoonpayCurrencies = async (): Promise<
  Record<string, any>[]
> => {
  const response = await fetch(
    `${NEXT_PUBLIC_MOONPAY_API_URI}/${queryKeys.currencies}`
  )

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return await response.json()
}
