import React from "react"
import { Button, Box, Chip } from "@mui/material"

type Props = {
  isAllowedInUs: boolean
  isSupportedInTestMode: boolean
  toggleSupportedInUs: () => void
  toggleSupportInTestMode: () => void
  currentTotal: number
}

const CurrenciesControls = ({
  isAllowedInUs,
  isSupportedInTestMode,
  toggleSupportedInUs,
  toggleSupportInTestMode,
  currentTotal,
}: Props): JSX.Element => {
  return (
    <Box sx={{ my: 2, display: "flex", alignItems: "center", columnGap: 2 }}>
      <Button
        onClick={toggleSupportedInUs}
        sx={{ textTransform: "none", minWidth: 200 }}
        variant="outlined"
      >
        {isAllowedInUs ? "allowed in US Only" : "all"}
      </Button>
      <Button
        onClick={toggleSupportInTestMode}
        sx={{ textTransform: "none", minWidth: 200 }}
        variant="outlined"
      >
        {isSupportedInTestMode ? "supports test mode" : "all"}
      </Button>
      <Chip label={`Results found: ${currentTotal}`} color="primary" />
    </Box>
  )
}

export default CurrenciesControls
