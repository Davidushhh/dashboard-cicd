import * as React from "react";
import { useParams } from "react-router-dom";
import { NavList } from "./NavList/NavList";
// import { Box } from "@mui/material";

import * as SC from "./SideBar.styled";
// import { mainPages } from "../../pagesConfig";

export default function MiniDrawer({ open, setOpen, subMenu }) {
  const params = useParams();

  return (
    <SC.Drawer
      variant="permanent"
      open={open}
      sx={{ paddingTop: { sm: "86px", lg: "0px" } }}
    >
      {/* <NavList
        open={open}
        setOpen={setOpen}
        navRoutes={params}
        subMenu={mainPages}
      /> */}
      <NavList
        open={open}
        setOpen={setOpen}
        navRoutes={params}
        subMenu={subMenu}
      />
    </SC.Drawer>
  );
}
