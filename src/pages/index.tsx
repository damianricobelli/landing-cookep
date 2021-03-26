import Head from "next/head"
import Hero from "@components/ui/Hero"
import Testimonial from "@components/ui/Testimonial"
import Footer from "@components/common/Footer"
export default function Home() {
  return (
    <>
      <Head>
        <title>Cookep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Testimonial />
      <Footer />
    </>
  )
}
