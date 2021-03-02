import Head from 'next/head'
import { NavbarWithButtons } from '../components/NavbarWithButtons'
import { Hero } from '../components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Hero/>

      
      
    </>
  )
}
