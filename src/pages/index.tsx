import { dehydrate, useQuery } from "@tanstack/react-query"
import type { NextPage, GetStaticProps } from "next"
import Head from "next/head"

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
      dehydratedState: dehydrate(queryClient, {}),
    },
    revalidate: DELAY.MINUTES_30,
  }
}

/**
 * @description home page nextpage component
 * @returns {JSX.Element} homepage markup
 */
const HomePage: NextPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [queryKeys.currencies],
    queryFn: fetchMoonpayCurrencies,
  })

  console.log("currencies: ", data?.slice(0, 2))

  return (
    <>
      <Head>
        <title>Tech test Moonpay.com</title>
        <meta
          name="description"
          content="Technical assignment for Front End by Moonpay.com"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Moonpay.com App</h1>
    </>
  )
}

export default HomePage
