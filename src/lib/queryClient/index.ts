import {
  QueryClient,
  QueryClientConfig,
  DefaultOptions,
} from "@tanstack/react-query"

import { DELAY } from "@/constants"

/**
 * @description top level error handler - within the scope of this tech test - it iwii just log the errors, BUT, if we scale up further - possibly: will display message ui as snackbar, and invoke some error logging api
 * @param {unknown} error a thrown eror, normally expected to be either instance of Error or AxiosError
 * @returns {undefined} void/effect function
 */
const queryErrorHandler = (error: unknown) => {
  const title =
    error instanceof Error ? error.message : "error connecting to server"

  // later - we can make some toast message for example.
  console.log({ title, status: "error", variant: "subtle", isClosable: true })
}

/**
 * @description default query options
 */
export const defaultQueryClientOptions: DefaultOptions = {
  queries: {
    onError: queryErrorHandler,
    staleTime: DELAY.MINUTES_10,
    cacheTime: DELAY.MINUTES_15,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  },
  mutations: {
    onError: queryErrorHandler,
  },
}

const initialConfig: QueryClientConfig = {
  defaultOptions: defaultQueryClientOptions,
}

/**
 * @description generates query client instance, such function will allow us to get a flexible variation of query client - for testing environment for example.
 * @param {object} config `QueryClient` configuration object
 * @returns {object} instance of `QueryClient`
 */
export const generateQueryClient = (
  config: QueryClientConfig = initialConfig
): QueryClient => new QueryClient(config)

export const queryClient = generateQueryClient()
