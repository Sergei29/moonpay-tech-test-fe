import { dehydrate } from "@tanstack/react-query"
import type { NextPage, GetStaticProps } from "next"
import { Typography } from "@mui/material"
import Head from "next/head"

import CurrenciesList from "@/components/CurrenciesList"
import MessageDisplay from "@/components/MessageDisplay"
import { generateQueryClient } from "@/lib/queryClient"
import { fetchMoonpayCurrencies } from "@/lib/api"
import { queryKeys, DELAY } from "@/constants"
import { useGetCurrencies } from "@/hooks/useGetCurrencies"

/**
 * @description static props - we're prefetching here the currencies list, which will give us zero loading time while we fetch on client side ( bettter UX)
 * @returns {Promise<object>} static gen props including react query dehydrated state, bearing the prefetched data.
 */
export const getStaticProps: GetStaticProps = async () => {
  const queryClient = generateQueryClient()
  await queryClient.prefetchQuery(
    [queryKeys.currencies],
    fetchMoonpayCurrencies
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: DELAY.MINUTES_30,
  }
}

/**
 * @description home page nextpage component
 * @returns {JSX.Element} homepage markup
 */
const HomePage: NextPage = () => {
  const {
    data,
    isError,
    isAllowedInUs,
    isSupportedInTestMode,
    keyNameSortedBy,
    toggleSortByNameOrCode,
    toggleSupportedInUs,
    toggleSupportInTestMode,
    toggleShuffleCurrencies,
  } = useGetCurrencies()

  return (
    <>
      <Head>
        <title>Tech test Moonpay.com | Homepage</title>
      </Head>

      <Typography
        variant="h4"
        component="h1"
        sx={{
          py: 3,
          fontWeight: 600,
          fontSize: {
            xs: "1.2rem",
            sm: "2.125rem",
          },
          textAlign: {
            xs: "center",
            sm: "left",
          },
        }}
      >
        Moonpay.com Currencies
      </Typography>
      {data ? (
        <CurrenciesList currenciesList={data}>
          <CurrenciesList.Controls
            isAllowedInUs={isAllowedInUs}
            isSupportedInTestMode={isSupportedInTestMode}
            keyNameSortedBy={keyNameSortedBy}
            toggleSortByNameOrCode={toggleSortByNameOrCode}
            toggleSupportedInUs={toggleSupportedInUs}
            toggleSupportInTestMode={toggleSupportInTestMode}
            toggleShuffleCurrencies={toggleShuffleCurrencies}
            currentTotal={data.length}
          />
        </CurrenciesList>
      ) : null}
      {isError && (
        <MessageDisplay message="Failed to get currencies list." type="error" />
      )}
    </>
  )
}

export default HomePage
