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
 * @description util function to ascertain if the value is empty (`null`, `undefined`, `''`, `{}`, `[]`) or not, to note : `isMepty` can also be taken from `lodash`, however the other one has slightly different behaviour, and also for the sake of the tech test I have not brought the whole package just for use of 2 util functions
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

type GenericFunction<T = unknown> = (a: T) => T

/**
 * @description compose function, can be used the one from `lodash` - but I didn't want to bring the whole lodash library just for one function use, if we would scale up this project certainly good idea to consider `lodash` instead of re-creating the same function.
 */
export const compose =
  <D>(...functionsList: GenericFunction<D>[]) =>
  (initialValue: D) =>
    functionsList.reduceRight(
      (currentValue, currentFunction) => currentFunction(currentValue),
      initialValue
    )

/**
 * @description util fn to shuffle an array items at random, can be also taken from the `lodash` library ( even - shoud be taken on the production project )
 * @param {Array} listOfItems array of items
 * @returns {Array} shuffled array of items
 */
export const shuffleAnArray = <T>(listOfItems: T[]) =>
  listOfItems
    .map((current) => ({ order: Math.random(), ...current }))
    .sort((currentItem, nextItem) => currentItem.order - nextItem.order)
    .map(({ order, ...restOfCurrentItem }) => ({ ...restOfCurrentItem }))
