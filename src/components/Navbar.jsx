import {
  AppBar,
  Box,
  InputBase,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Menu,
  Menu as MenuIcon,
  Twitter,
} from "@mui/icons-material";

function Navbar() {
  const MenuItems = [
    { Name: "Home", Link: "/" },
    { Name: "Products", Link: "#" },
    { Name: "Portfolio", Link: "#" },
    { Name: "Blog", Link: "#" },
    { Name: "Contact Us", Link: "#" },
  ];

  return (
    <>
      <AppBar sx={{ background: "black", position: "static" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ gap: "1rem", display: "flex" }}>
            <Facebook />
            <Instagram />
            <Twitter />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              {MenuItems.map((item) => (
                <Typography sx={{ cursor: "pointer" }}>{item.Name}</Typography>
              ))}
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: "1rem" }}>
            <InputBase placeholder="search" sx={{ color: "white" }} />
            <MenuIcon
              sx={{ display: { xs: "block", sm: "block", md: "none" } }}
            />
          </Box>
        </Toolbar>
        {/* <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={true}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
        </Menu> */}
      </AppBar>
    </>
  );
}

export default Navbar;
