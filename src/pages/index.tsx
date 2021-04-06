import Head from "next/head"
import { useState } from "react"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import Hero from "@components/ui/Hero"
import Testimonial from "@components/ui/Testimonial"
import Use from "@components/ui/Use"
import Footer from "@components/common/Footer"
import { WhatsappButton } from "@components/ui/WhatsappButton"
import React from "react"

export default function Home() {
  const [hideOnScroll, setHideOnScroll] = useState(false)
  useScrollPosition(
    ({ currPos }) => {
      setHideOnScroll(currPos.y < -600)
    },
    [hideOnScroll],
    null,
    false,
    300
  )

  return (
    <>
      <Head>
        <title>Cookep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Use />
      <Testimonial />
      <WhatsappButton show={hideOnScroll} />
      <Footer />
    </>
  )
}
