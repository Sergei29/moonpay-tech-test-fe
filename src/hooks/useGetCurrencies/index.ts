import { useState, useEffect, useCallback } from "react"
import { useQuery } from "@tanstack/react-query"

import { fetchMoonpayCurrencies, isEmpty, compose } from "@/lib/api"
import { queryKeys } from "@/constants"
import { Currency } from "@/types"

const getFilterCurrenciesSupportedInUs =
  (isSupported: boolean) => (currencies: Currency[]) =>
    currencies.filter((currentCurrency) => {
      if (isEmpty(currentCurrency.isSupportedInUS)) return false === isSupported

      return isSupported
        ? currentCurrency.isSupportedInUS === isSupported
        : true
    })

const getFilterCurrenciesSupportInTestMode =
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
 * @description custom hook, fetches and filters the currencies list
 * @returns {object} use query result and filtered/sorted data
 */
export const useGetCurrencies = () => {
  const [isAllowedInUs, setIsAllowedInUs] = useState<boolean>(true)
  const [isSupportedInTestMode, setIsSupportedInTestMode] =
    useState<boolean>(true)

  const { data: currenciesList, ...restQueryResult } = useQuery({
    queryKey: [queryKeys.currencies],
    queryFn: fetchMoonpayCurrencies,
  })

  const toggleSupportedInUs = () => setIsAllowedInUs((current) => !current)

  const toggleSupportInTestMode = () =>
    setIsSupportedInTestMode((current) => !current)

  return {
    data: currenciesList
      ? compose(
          getFilterCurrenciesSupportInTestMode(isSupportedInTestMode),
          getFilterCurrenciesSupportedInUs(isAllowedInUs)
        )(currenciesList)
      : currenciesList,
    isAllowedInUs,
    isSupportedInTestMode,
    toggleSupportedInUs,
    toggleSupportInTestMode,
    ...restQueryResult,
  }
}
