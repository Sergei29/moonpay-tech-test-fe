import { useState, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"

import { fetchMoonpayCurrencies, compose } from "@/lib/api"
import { queryKeys } from "@/constants"

import {
  getFilterCurrenciesSupportedInUs,
  getFilterCurrenciesSupportInTestMode,
  getSortByCurrencyNameOrCode,
  getShuffleCurrencies,
} from "./utils"

/**
 * @description custom hook, fetches and filters the currencies list
 * @returns {object} use query result and filtered/sorted data
 */
export const useGetCurrencies = () => {
  const [isAllowedInUs, setIsAllowedInUs] = useState<boolean>(true)
  const [isSupportedInTestMode, setIsSupportedInTestMode] =
    useState<boolean>(true)
  const [keyNameSortedBy, setKeyNameSortedBy] = useState<"name" | "code">(
    "code"
  )
  const [isRandomShuffle, setIsRandomShuffle] = useState<boolean>(false)

  const { data: currenciesList, ...restQueryResult } = useQuery({
    queryKey: [queryKeys.currencies],
    queryFn: fetchMoonpayCurrencies,
  })

  const toggleSupportedInUs = () => setIsAllowedInUs((current) => !current)

  const toggleSupportInTestMode = () =>
    setIsSupportedInTestMode((current) => !current)

  const toggleSortByNameOrCode = () =>
    setKeyNameSortedBy((current) => (current === "name" ? "code" : "name"))

  const toggleShuffleCurrencies = () =>
    setIsRandomShuffle((current) => !current)

  /**
   * @description an effect to reset the boolean state back to `false`
   * in order to acheive one-off shuffle action - however the approach is open to debate, reset state within the functions handlers above for example or other...
   */
  useEffect(() => {
    setIsRandomShuffle(false)
  }, [keyNameSortedBy, isSupportedInTestMode, isAllowedInUs])

  return {
    data: !!currenciesList
      ? compose(
          getShuffleCurrencies(isRandomShuffle),
          getSortByCurrencyNameOrCode(keyNameSortedBy === "name"),
          getFilterCurrenciesSupportInTestMode(isSupportedInTestMode),
          getFilterCurrenciesSupportedInUs(isAllowedInUs)
        )(currenciesList)
      : currenciesList,
    isAllowedInUs,
    isSupportedInTestMode,
    keyNameSortedBy,
    toggleSupportedInUs,
    toggleSupportInTestMode,
    toggleSortByNameOrCode,
    toggleShuffleCurrencies,
    ...restQueryResult,
  }
}
