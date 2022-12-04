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
