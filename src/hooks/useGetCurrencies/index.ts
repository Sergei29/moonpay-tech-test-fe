import { useState, useEffect, useCallback } from "react"
import { useQuery } from "@tanstack/react-query"

import { fetchMoonpayCurrencies, compose } from "@/lib/api"
import { queryKeys } from "@/constants"
import {
  getFilterCurrenciesSupportedInUs,
  getFilterCurrenciesSupportInTestMode,
} from "./utils"

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
    data: !!currenciesList
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
