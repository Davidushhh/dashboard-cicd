import { Box, Typography } from "@mui/material";
import * as SC from "./ChartGroupContainer.styled";

export const DNDSwitch = ({ isDragable, setIsDragable }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "e-Ukraine",
          fontWeight: "500",
          fontSize: "14px",
        }}
      >
        Перетягувавння
      </Typography>
      <SC.OnOffSwitch
        checked={isDragable}
        onChange={() => setIsDragable(!isDragable)}
      />
    </Box>
  );
};
