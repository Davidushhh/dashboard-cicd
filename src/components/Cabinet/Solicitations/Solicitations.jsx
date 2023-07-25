import React from "react";
import { Box } from "@mui/material";

export const Solicitations = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "75vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        margin: "0",
        borderRadius: "12px",
        border: "3px solid #000",
      }}
    >
      <h2>Solicitations component</h2>
    </Box>
  );
};

export default Solicitations;
