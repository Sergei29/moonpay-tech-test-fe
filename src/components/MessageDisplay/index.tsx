import React from "react"
import { Box, Typography } from "@mui/material"

type Props = {
  message: string
  type: "error" | "info"
}

/**
 * @description displays message, if something unexpected occured while fetching
 * @param {object} props bearing message text
 * @returns {JSX.Element} message markup
 */
const MessageDisplay = ({ message, type }: Props): JSX.Element => (
  <Box
    sx={{
      minHeight: "50vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Typography
      sx={{
        fontWeight: 600,
        color: (theme) =>
          type === "error"
            ? theme.palette.error.main
            : theme.palette.primary.main,
      }}
    >
      {message}
    </Typography>
  </Box>
)

export default MessageDisplay
