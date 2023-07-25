import * as SC from "./ProfileNav.styled";
import { Box, IconButton } from "@mui/material";
import { AccountCircle, MoreVert } from "@mui/icons-material";
import { UserProfile } from "components/MainLayout/Header/UserProfile/UserProfile";
import { useSelector } from "react-redux";

export const ProfileNav = ({
  menuId,
  handleProfileMenuOpen,
  mobileMenuId,
  anchorEl,
  handleMobileMenuClose,
}) => {
  const isLogin = Boolean(useSelector((state) => state.auth.token));

  if (!isLogin)
    return (
      <>
        <Box>
          <SC.LoginBtn href="/login" underline="none">
            Вхід
          </SC.LoginBtn>
        </Box>
      </>
    );

  if (isLogin)
    return (
      <>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <SC.ProfileLink href="/profile" underline="hover">
             Особистий кабінет
          </SC.ProfileLink>
          <IconButton
            aria-describedby={"user-profile-button"}
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            // onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreVert />
          </IconButton>
        </Box>
        <UserProfile
          id={"user-profile-button"}
          anchorEl={anchorEl}
          openUserProfile={handleProfileMenuOpen}
          closeUserProfile={handleMobileMenuClose}
        />
      </>
    );
};
