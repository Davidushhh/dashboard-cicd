import React from "react";
import { Box, Button, Stack, Divider } from "@mui/material";
import { SubStructureSelect } from "./SubStructureSelect/SubStructureSelect";

const pages = [
  {
    page: "ЦНАП",
    tabs: ["Інклюзивність", "Безбар'єрність", "Dashboard", "Logout"],
  },
  { page: "Products", tabs: ["Profile", "Account", "Dashboard", "Logout"] },
  { page: "Products", tabs: ["Profile", "Account", "Dashboard", "Logout"] },
];

export const StructureSelect = () => {
  const [structure, setStructure] = React.useState(pages[0].page);

  const selectStructureHandler = (event) => {
    setStructure(event.target.value);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
        }}
      >
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          {pages.map((item) => (
            <Button
              key={item.page}
              value={item.page}
              onClick={selectStructureHandler}
              variant="contained"
            >
              {item.page}
            </Button>
          ))}
        </Stack>
      </Box>
      <SubStructureSelect structure={structure} pages={pages} />
    </Box>
  );
};
