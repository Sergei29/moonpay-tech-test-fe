import type { AppProps } from "next/app"
import { Hydrate, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { CacheProvider, EmotionCache } from "@emotion/react"
import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"

import { createEmotionCache, theme } from "@/theme"
import { queryClient } from "@/lib/queryClient"
import Layout from "@/Layout"

/**
 * @description  Client-side cache, shared for the whole session of the user in the browser.
 */
const clientSideEmotionCache = createEmotionCache()

type PageProps = {
  emotionCache?: EmotionCache
} & AppProps

const App = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: PageProps) => (
  <QueryClientProvider client={queryClient}>
    <Hydrate state={pageProps.dehydratedState}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </Hydrate>
  </QueryClientProvider>
)

export default App
