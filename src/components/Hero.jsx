import { Box, Typography } from "@mui/material";
import fashion2 from "../static/fashion2.jpg";

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
        <Box sx={{ marginTop: "1rem" }}>
          <img src={fashion2} alt="fashion2" height={550} width="100%" />
          <Box
            sx={{
              backgroundColor: "white",
              opacity: "0.8",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography>Trending Styles</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
