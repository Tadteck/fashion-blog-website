import { Box, Typography } from "@mui/material";
import fashion2 from "../static/fashion2.jpg";

const Hero = () => {
  return (
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
      <Box
        sx={{
          backgroundImage: `url(${fashion2})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "white",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 600,
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "center",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              opacity: "0.8",
              marginTop: "2rem",
              width: "60%",
            }}
          >
            <Typography variant="h3" align="center" pt={8}>
              Trending Styles
            </Typography>
            <Typography variant="h4" align="center">
              Life is boring without fashion
            </Typography>
            <Typography variant="h4" align="center" pb={8}>
              we love to change your style
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
