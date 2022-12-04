import React from "react"
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Tooltip,
} from "@mui/material"

import { Currency } from "@/types"
import { isEmpty } from "@/lib/api"

/**
 * @description aggregates text values for JSX part for the component
 * @param {object}  optionalPropValues object bearing optional boolean flags
 * @returns {object} object bearing text values
 */
const getTextContent = ({
  isSupportedInUS,
  supportsTestMode,
}: {
  isSupportedInUS?: boolean
  supportsTestMode?: boolean
}) => ({
  supportedInUSText: isEmpty(isSupportedInUS)
    ? "N/A"
    : isSupportedInUS
    ? "YES"
    : "NO",
  supportsTestModeText: isEmpty(supportsTestMode)
    ? "N/A"
    : supportsTestMode
    ? "YES"
    : "NO",
})

type Props = {
  currencyItem: Currency
}

/**
 * @description display currency single item
 * @param {object} props bearing currency information
 * @returns {JSX.Element} currency summary markup
 */
const CurrencyCard = ({ currencyItem }: Props): JSX.Element => {
  const { name, type, code, isSupportedInUS, supportsTestMode } = currencyItem
  const { supportedInUSText, supportsTestModeText } = getTextContent({
    isSupportedInUS,
    supportsTestMode,
  })

  return (
    <Card
      sx={{
        width: {
          lg: "29%",
          md: "29%",
          sm: "49%",
          xs: "100%",
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", columnGap: 1, alignItems: "center" }}>
          <Typography
            variant="h5"
            component="h4"
            sx={{ fontSize: "1rem", fontWeight: 600 }}
          >
            {name}
          </Typography>
          <Tooltip title="currency code">
            <Chip label={code} sx={{ fontSize: "0.8rem", fontWeight: 600 }} />
          </Tooltip>
        </Box>
        <Typography>{type}</Typography>
        <Box sx={{ display: "flex", columnGap: 1, alignItems: "center" }}>
          <Typography>Allowed in US: </Typography>
          <Typography sx={{ fontSize: ".8rem" }}>
            {supportedInUSText}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", columnGap: 1, alignItems: "center" }}>
          <Typography>Test Mode: </Typography>
          <Typography sx={{ fontSize: ".8rem" }}>
            {supportsTestModeText}
          </Typography>{" "}
        </Box>
      </CardContent>
    </Card>
  )
}

export default CurrencyCard
