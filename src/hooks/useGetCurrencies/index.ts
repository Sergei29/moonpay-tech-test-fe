import { useState } from "react"
import { useQuery } from "@tanstack/react-query"

import { fetchMoonpayCurrencies, compose } from "@/lib/api"
import { queryKeys } from "@/constants"

import {
  getFilterCurrenciesSupportedInUs,
  getFilterCurrenciesSupportInTestMode,
  getSortByCurrencyNameOrCode,
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

  const { data: currenciesList, ...restQueryResult } = useQuery({
    queryKey: [queryKeys.currencies],
    queryFn: fetchMoonpayCurrencies,
  })

  const toggleSupportedInUs = () => setIsAllowedInUs((current) => !current)

  const toggleSupportInTestMode = () =>
    setIsSupportedInTestMode((current) => !current)

  const toggleSortByNameOrCode = () =>
    setKeyNameSortedBy((current) => (current === "name" ? "code" : "name"))

  return {
    data: !!currenciesList
      ? compose(
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
    ...restQueryResult,
  }
}
