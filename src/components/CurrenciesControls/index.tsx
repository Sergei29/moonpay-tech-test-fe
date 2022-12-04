import React from "react"
import {
  Tooltip,
  Box,
  Chip,
  Switch,
  Typography,
  Button,
  ButtonGroup,
} from "@mui/material"

type Props = {
  isAllowedInUs: boolean
  isSupportedInTestMode: boolean
  keyNameSortedBy: "code" | "name"
  toggleSortByNameOrCode: () => void
  toggleSupportedInUs: () => void
  toggleSupportInTestMode: () => void
  toggleShuffleCurrencies: () => void
  currentTotal: number
}

/**
 * @description controls to operate the display currencies list: filter, sort etc.
 * @param {object} props bearing list current display state and handler functions
 * @returns {JSX.Element} controls markup
 */
const CurrenciesControls = ({
  isAllowedInUs,
  isSupportedInTestMode,
  keyNameSortedBy,
  toggleSortByNameOrCode,
  toggleSupportedInUs,
  toggleSupportInTestMode,
  toggleShuffleCurrencies,
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
      gap: 2,
    }}
  >
    <Box sx={{ minWidth: 250, display: "flex", alignItems: "center" }}>
      <Typography sx={{ fontSize: "0.8rem" }}>Allowed In US: </Typography>
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
      <Typography sx={{ fontSize: "0.8rem" }}>
        Supported in test mode
      </Typography>
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
      <Typography sx={{ fontSize: "0.8rem" }}>
        {isSupportedInTestMode ? "only" : "all"}
      </Typography>
    </Box>
    <Box
      sx={{
        minWidth: 250,
        display: "flex",
        columnGap: 2,
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontSize: "0.8rem" }}>Sort by: </Typography>
      <ButtonGroup variant="outlined">
        <Button
          disabled={keyNameSortedBy === "name"}
          onClick={toggleSortByNameOrCode}
          sx={{ px: 1, py: 0, fontSize: "0.8rem", textTransform: "none" }}
        >
          <Tooltip title="sort by name">
            <Box component="span">name</Box>
          </Tooltip>
        </Button>

        <Button
          disabled={keyNameSortedBy === "code"}
          onClick={toggleSortByNameOrCode}
          sx={{ px: 1, py: 0, fontSize: "0.8rem", textTransform: "none" }}
        >
          <Tooltip title="sort by code">
            <Box component="span">code</Box>
          </Tooltip>
        </Button>

        <Button
          onClick={toggleShuffleCurrencies}
          sx={{ px: 1, py: 0, fontSize: "0.8rem", textTransform: "none" }}
        >
          <Tooltip title="shuffle list at random">
            <Box component="span">shuffle list</Box>
          </Tooltip>
        </Button>
      </ButtonGroup>
    </Box>
    <Chip
      label={`Results found: ${currentTotal}`}
      color="primary"
      sx={{
        ml: {
          md: "auto",
        },
        "& > label": {
          fontSize: "0.8rem",
        },
      }}
    />
  </Box>
)

export default CurrenciesControls
