import '../styles/globals.css'
import '../styles/antd.less'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
