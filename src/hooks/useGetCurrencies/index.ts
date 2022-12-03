import { useState, useEffect, useCallback } from "react"
import { useQuery } from "@tanstack/react-query"

import { fetchMoonpayCurrencies, isEmpty, compose } from "@/lib/api"
import { queryKeys } from "@/constants"
import { Currency } from "@/types"

const filterCurrenciesSupportedInUs = (
  isSupported: boolean,
  currencies?: Currency[]
) =>
  currencies
    ? currencies.filter((currentCurrency) => {
        if (isEmpty(currentCurrency.isSupportedInUS))
          return true === isSupported
        return currentCurrency.isSupportedInUS === isSupported
      })
    : currencies

/**
 * @description custom hook, fetches and filters the currencies list
 * @returns {object} use query result and filtered/sorted data
 */
export const useGetCurrencies = () => {
  const [isAllowedInUs, setIsAllowedInUs] = useState<boolean>(true)

  const { data: currenciesList, ...restQueryResult } = useQuery({
    queryKey: [queryKeys.currencies],
    queryFn: fetchMoonpayCurrencies,
  })

  const toggleSupportedInUs = () => setIsAllowedInUs((current) => !current)

  return {
    data: filterCurrenciesSupportedInUs(isAllowedInUs, currenciesList),
    isAllowedInUs,
    toggleSupportedInUs,
    ...restQueryResult,
  }
}
