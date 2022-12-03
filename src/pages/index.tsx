import { dehydrate, useQuery } from "@tanstack/react-query"
import type { NextPage, GetStaticProps } from "next"
import { Typography } from "@mui/material"
import Head from "next/head"

import CurrenciesList from "@/components/CurrenciesList"
import MessageDisplay from "@/components/MessageDisplay"
import { generateQueryClient } from "@/lib/queryClient"
import { fetchMoonpayCurrencies } from "@/lib/api"
import { queryKeys, DELAY } from "@/constants"

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
  const { data, isError } = useQuery({
    queryKey: [queryKeys.currencies],
    queryFn: fetchMoonpayCurrencies,
  })

  return (
    <>
      <Head>
        <title>Tech test Moonpay.com | Homepage</title>
      </Head>

      <Typography variant="h4" component="h1" sx={{ py: 3 }}>
        Moonpay.com Currencies
      </Typography>
      {data ? <CurrenciesList currenciesList={data} /> : null}
      {isError && (
        <MessageDisplay message="Failed to get currencies list." type="error" />
      )}
    </>
  )
}

export default HomePage
