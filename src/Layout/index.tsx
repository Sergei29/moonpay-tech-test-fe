import React from "react"
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
  <Container>{children}</Container>
)

export default Layout
