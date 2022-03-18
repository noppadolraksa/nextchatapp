import '../styles/globals.css'
import '../styles/antd.less'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import { AuthProvider } from '../src/context/AuthContext'
import { Loading } from '../src/utils/Loading'

import { ChatProvider } from '../src/context/ChatContext'
// import { LoadingProvider } from '../src/context/LoadingContext'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { SelectProvider } from '../src/context/SelectContext'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)

  // useEffect(() => {
  //   const handleStart = (url: string) => {
  //     url !== router.pathname ? setLoading(true) : setLoading(false)
  //   }
  //   const handleComplete = () => setLoading(false)

  //   router.events.on('routeChangeStart', handleStart)
  //   router.events.on('routeChangeComplete', handleComplete)
  //   router.events.on('routeChangeError', handleComplete)
  // }, [router])

  return (
    <>
      {/* <LoadingProvider> */}
      <AuthProvider>
        <ChatProvider>
          <SelectProvider>
            <ThemeProvider attribute="class">
              {loading ? (
                <Loading loading={loading} />
              ) : (
                <Component {...pageProps} />
              )}
            </ThemeProvider>
          </SelectProvider>
        </ChatProvider>
      </AuthProvider>
      {/* </LoadingProvider> */}
    </>
  )
}

export default MyApp
