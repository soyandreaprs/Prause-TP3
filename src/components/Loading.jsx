import { Box } from '@mui/material'
import React from 'react'

const Loading = () => {
  return (
    <Box>
      <CircularProgress sx= {{ color: "#A01F26", display: "flex", justifyContent: "center"}} />
    </Box>
  )
}

export default Loading