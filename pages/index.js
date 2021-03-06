import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import FeaturesSection from '../components/FeaturesSection'
import CallToAction from '../components/CallToAction'



export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   

    <Layout> 
        <Hero/>
        <FeaturesSection/>
        <CallToAction/>
      </Layout>
      </div>
  )
}
