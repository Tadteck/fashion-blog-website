import { Box, Typography } from "@mui/material";
import offwhite from "../static/offwhite.jpg";

const Hero = () => {
  return (
    <>
      <Box sx={{ margin: "2rem" }}>
        <Typography variant="h3" align="center" sx={{ fontWeight: "900" }}>
          Fashion Blog InC{" "}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{ fontWeight: "100", marginTop: "1rem" }}
        >
          the Beauty of fashion is defined by the what people visualize
        </Typography>
        <Box sx={{ backgroundImage: "url(${offwhite})" }}></Box>
      </Box>
    </>
  );
};

export default Hero;
