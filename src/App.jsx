import {
  AppBar,
  Box,
  InputBase,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { Facebook, Instagram, Menu, Twitter } from "@mui/icons-material";

function App() {
  const MenuItems = [
    { Name: "Home", Link: "/" },
    { Name: "Products", Link: "#" },
    { Name: "Portfolio", Link: "#" },
    { Name: "Blog", Link: "#" },
    { Name: "Contact Us", Link: "#" },
  ];

  return (
    <>
      <AppBar sx={{ background: "black" }}>
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
            <InputBase placeholder="search" sx={{color:"white"}} />
            <Menu sx={{ display: { xs: "block", sm: "block", md: "none" } }} />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default App;
