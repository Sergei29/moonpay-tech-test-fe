import { isEmpty } from "@/lib/api"
import { Currency } from "@/types"

/**
 * @description generates a filter function
 * @param {boolean} isSupported condition to filter by
 * @returns {Function} filter function, that can filter out the currencies supported in US
 */
export const getFilterCurrenciesSupportedInUs =
  (isSupported: boolean) => (currencies: Currency[]) =>
    currencies.filter((currentCurrency) => {
      if (isEmpty(currentCurrency.isSupportedInUS)) return false === isSupported

      return isSupported
        ? currentCurrency.isSupportedInUS === isSupported
        : true
    })

/**
 * @description generates a filter function
 * @param {boolean} isSupported condition to filter by
 * @returns {Function} filter function, that can filter out the currencies supported in test mode
 */
export const getFilterCurrenciesSupportInTestMode =
  (isSupported: boolean) => (currencies: Currency[]) =>
    currencies.filter((currentCurrency) => {
      if (isEmpty(currentCurrency.supportsTestMode)) {
        return false === isSupported
      }

      return isSupported
        ? currentCurrency.supportsTestMode === isSupported
        : true
    })

/**
 * @description generates a sort function
 * @param {boolean} isSortingByName condition to sort by
 * @returns {Function} sort function, that sort the currencies either by name or code
 */
export const getSortByCurrencyNameOrCode =
  (isSortingByName: boolean) => (currencies: Currency[]) =>
    currencies.sort((currentCurrency, nextCurrency) => {
      const keyNameToSortBy = isSortingByName ? "name" : "code"
      const currentValue = currentCurrency[keyNameToSortBy]
      const nextValue = nextCurrency[keyNameToSortBy]

      if (currentValue < nextValue) return -1
      if (currentValue > nextValue) return 1
      return 0
    })
