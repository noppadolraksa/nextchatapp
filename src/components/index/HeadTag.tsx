import Head from 'next/head'

export function HeadTags() {
  const title =
    'Demo:serverless next.js ChatApp and authentication with firebase'
  const desc =
    'try to create ChatApp and authentication with nextjs with serverless'

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={desc} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:site_name" content="Clerk" />
    </Head>
  )
}
