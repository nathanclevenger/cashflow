import Head from 'next/head'
import { Hero } from '../components/Hero'
import { SignupSteps } from '../components/SignupSteps'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SignupSteps/>

      
      
    </>
  )
}
