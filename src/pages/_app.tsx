import type { AppProps } from "next/app"
import { CacheProvider, EmotionCache } from "@emotion/react"
import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"

import { createEmotionCache, theme } from "@/theme"

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
}: PageProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App