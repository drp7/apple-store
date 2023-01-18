import Head from 'next/head'
import React from 'react'

export default function Title({title}:{title?:string}) {
  return (
    <Head >
        <title>apple{title&&` - ${title}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  )
}
