import React from "react"
import { Box, BoxProps } from "@mui/material"

import { Currency } from "@/types"

import CurrenciesControls from "../CurrenciesControls"
import MessageDisplay from "../MessageDisplay"
import CurrencyCard from "../CurrencyCard"

type Props = {
  children: React.ReactNode
  currenciesList: Currency[]
} & Omit<BoxProps, "children">

/**
 * @description display currencies list, and filtering/sorting controls
 * @param {object} props bearing currencies list
 * @returns {JSX.Element} currencies summary list markup, OR no-data message if list is empty
 */
const CurrenciesList = ({
  children,
  currenciesList,
  sx,
  ...restBoxProps
}: Props): JSX.Element => {
  if (currenciesList.length === 0) {
    return <MessageDisplay message="No data available" type="info" />
  }

  return (
    <>
      {children}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 1,
          ...sx,
        }}
        {...restBoxProps}
      >
        {currenciesList.map((currencyItem) => (
          <CurrencyCard key={currencyItem.id} currencyItem={currencyItem} />
        ))}
      </Box>
    </>
  )
}

CurrenciesList.Controls = CurrenciesControls

export default CurrenciesList
