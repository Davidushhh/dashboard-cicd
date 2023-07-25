import { Box, Typography } from "@mui/material";

export const MessageBox = ({ errorCode, text }) => {
  return (
    <Box
      sx={{
        margin: "auto",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "12px",
        width: { sm: "280px", lg: "400px" },
        height: { sm: "180px", lg: "300px" },
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
        padding: "20px",
      }}
    >
      <Typography
        sx={{
          fontSize: { sm: "28px", lg: "36px" },
          fontWeight: "bold",
          color: "rgba(94, 53, 77, 0.6)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {errorCode && <span>{errorCode}</span>}
        <span>{text}</span>
      </Typography>
    </Box>
  );
};
