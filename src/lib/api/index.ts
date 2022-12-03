import { NEXT_PUBLIC_MOONPAY_API_URI, queryKeys } from "@/constants"
import { Currency } from "@/types"

/**
 * @description fetching list of all currencies from the MoonPay API
 * @returns {Promise<Array>} promise resolving to the list for currencies
 */
export const fetchMoonpayCurrencies = async (): Promise<Currency[]> => {
  const response = await fetch(
    `${NEXT_PUBLIC_MOONPAY_API_URI}/${queryKeys.currencies}`
  )

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return await response.json()
}

/**
 * @description util function to ascertain if the value is empty (`null`, `undefined`, `''`, `{}`, `[]`) or not
 * @param {unknown} value value to verify
 * @returns {boolean}
 */
export const isEmpty = (value: unknown) => {
  if (typeof value === "undefined" || value === null || value === "") {
    return true
  }
  if (typeof value === "boolean" || typeof value === "number") {
    return false
  }

  if (typeof value === "object" && Object.keys(value).length === 0) {
    return true
  }

  return false
}

type AnyFunc = <T = unknown>(a: T) => unknown

/**
 * @description compose function, can be used the one from `lodash` - but I didn't want to bring the whole lodash library just for one function use, if we would scale up this project certainly good idea to consider `lodash` instead of re-creating the same function.
 */
export const compose =
  (...functionsList: AnyFunc[]) =>
  (initialValue: unknown) =>
    functionsList.reduceRight(
      (currentValue, currentFunction) => currentFunction(currentValue),
      initialValue
    )
