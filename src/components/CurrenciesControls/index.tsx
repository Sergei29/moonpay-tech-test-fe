import React from "react"
import { Tooltip, Box, Chip, Switch, Typography } from "@mui/material"

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
}: Props): JSX.Element => (
  <Box
    sx={{
      my: 2,
      display: "flex",
      flexDirection: {
        xs: "column",
        md: "row",
      },
      alignItems: {
        md: "center",
      },
      columnGap: 2,
    }}
  >
    <Box sx={{ minWidth: 250, display: "flex", alignItems: "center" }}>
      <Typography>Allowed In US: </Typography>
      <Tooltip
        title={`switch to display ${isAllowedInUs ? "all" : "only in US"}`}
      >
        <Switch
          checked={isAllowedInUs}
          onChange={toggleSupportedInUs}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Tooltip>
      <Typography>{isAllowedInUs ? "only" : "all"}</Typography>
    </Box>
    <Box sx={{ minWidth: 250, display: "flex", alignItems: "center" }}>
      <Typography>Supported in test mode</Typography>
      <Tooltip
        title={`switch to display ${
          isSupportedInTestMode ? "all" : "only in test mode"
        }`}
      >
        <Switch
          checked={isSupportedInTestMode}
          onChange={toggleSupportInTestMode}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Tooltip>
      <Typography>{isSupportedInTestMode ? "only" : "all"}</Typography>
    </Box>
    <Chip
      label={`Results found: ${currentTotal}`}
      color="primary"
      sx={{
        ml: {
          md: "auto",
        },
      }}
    />
  </Box>
)

export default CurrenciesControls
