import { Box, Typography } from "@mui/material";

const Error = ({ text }) => {
  return (
    <Box>
      <Typography variant="h6" sx={{ color: "#A01F26", textAlign: "center" }}>
        {text}
      </Typography>
    </Box>
  );
};

export default Error;
