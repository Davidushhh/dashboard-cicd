import React, { useState } from "react";
import List from "@mui/material/List";

import { NavColapse } from "../NavColapse/NavColapse";
import { NavNoColapse } from "../NavNoColapse/NavNoColapse";
// import { Divider } from "@mui/material";

export const NavList = ({ open, setOpen, navRoutes, subMenu }) => {
  const [currentNav, setCurrentNav] = useState("");

  if (subMenu)
    return (
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "flex-start",
          paddingTop: "16px",
          paddingLeft: "20px",
        }}
      >
        {subMenu.map(({ id, color, menuTitle, type, icon, children }) =>
          type === "collapse" ? (
            <NavColapse
              key={id}
              id={id}
              title={menuTitle}
              icon={icon}
              color={color}
              navRoutes={navRoutes}
              sidebarOpen={open}
              setSidebarOpen={setOpen}
              children={children}
              currentNav={currentNav}
              setCurrentNav={setCurrentNav}
            />
          ) : (
            <NavNoColapse
              key={id}
              id={id}
              title={menuTitle}
              color={color}
              icon={icon}
              open={open}
              setOpen={setOpen}
              navRoutes={navRoutes}
              url={children[0].url}
              setCurrentNav={setCurrentNav}
            />
          )
        )}
      </List>
    );
};
