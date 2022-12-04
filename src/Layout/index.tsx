import React from "react"
import Head from "next/head"
import { Container } from "@mui/material"

type Props = {
  children: React.ReactNode
}

/**
 * @description Page layout component
 * @param {object} props componet props with nested children
 * @returns {JSX.Element} nested components markup within a set layout
 */
const Layout = ({ children }: Props): JSX.Element => (
  <>
    <Head>
      <title>Tech test Moonpay.com</title>
      <meta
        name="description"
        content="Technical assignment for a front end role by Moonpay.com"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Container>{children}</Container>
  </>
)

export default Layout
