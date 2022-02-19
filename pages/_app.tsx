import '../styles/globals.css'
import '../styles/antd.less'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import { AuthProvider } from '../src/context/AuthProvider'
import Loading from '../src/utils/Loading'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  // return <Loading type="spin" color="#6366f1" />
  return (
    <>
      <AuthProvider>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </>
  )
}

export default MyApp
