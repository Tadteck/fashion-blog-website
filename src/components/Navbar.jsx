

import {
    AppBar,
    Box,
    InputBase,
    Link,
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
        <AppBar sx={{ background: "black", position:"static" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ gap: "1rem", display: "flex" }}>
              <Facebook />
              <Instagram />
              <Twitter />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
              <Box sx={{ display: "flex", gap: "1rem" }}>
                {MenuItems.map((items) => (
                  <Typography sx={{ cursor: "pointer" }}>{items.Name}</Typography>
                ))}
              </Box>
            </Box>
  
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <InputBase placeholder="search" sx={{ color: "white" }} />
              <MenuIcon
                sx={{ display: { xs: "block", sm: "block", md: "none" } }}
              />
            </Box>
            
  {/* ### the menu bar arent working out relook */}
            <Menu
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
              <Box sx={{ height: "90vh", width: 350 }}>
                {MenuItems.map((items) => (
                  <MenuItem sx={{ cursor: "pointer" }}>{items.Name}</MenuItem>
                ))}
              </Box>
            </Menu>
          </Toolbar>
        </AppBar>
      </>
    );
  }
  
  export default Navbar;
  