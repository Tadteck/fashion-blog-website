import { Box, Stack, styled, Typography } from "@mui/material";
import kids from "../static/kids.jpg";
import women from "../static/Women.jpg";
import men from "../static/Men.jpg";

const StyledBox = styled(Box)({
  height: 200,
  width: "100%",
  cursor: "pointer",
});

const StyledTypography = styled(Typography)({
  // margin:"25% 50px 25% 50px",
  backgroundColor: "white",
  opacity: "0.8",
});

const Categories = () => {
  return (
    <>
      <Stack
        flexDirection={"row"}
        gap={4}
        margin={4}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <StyledBox
          sx={{
            backgroundImage: `url(${kids})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "white",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: 250,
            width: "100%",
          }}
        >
          <StyledTypography variant="h5" align="center">
            KIDS
          </StyledTypography>
        </StyledBox>
        <StyledBox
          sx={{
            backgroundImage: `url(${men})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "white",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: 250,
            width: "100%",
          }}
        >
          <StyledTypography variant="h5" align="center">
            MEN
          </StyledTypography>
        </StyledBox>
        <StyledBox
          sx={{
            backgroundImage: `url(${women})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "white",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: 250,
            width: "100%",
          }}
        >
          <StyledTypography variant="h5" align="center">
            WOMEN
          </StyledTypography>
        </StyledBox>
      </Stack>
    </>
  );
};

export default Categories;
