import { Box, Stack, styled, Typography } from "@mui/material";

const StyledBox = styled(Box)({
  height: 200,
  width: "100%",
  cursor: "pointer",
});

const StyledTypography = styled(Typography)({
  margin: "25% 50px 25% 50px",
  backgroundColor: "white",
  opacity: "0.8",
});

const Categories = () => {
  return (
    <>
      <Stack flexDirection={"row"} gap={4} position={"static"}>
        <StyledBox>
          <StyledTypography variant="h3" align="center">
            KIDS
          </StyledTypography>
        </StyledBox>
        <StyledBox>
          <StyledTypography variant="h3" align="center">
            MEN
          </StyledTypography>
        </StyledBox>
        <StyledBox>
          <StyledTypography variant="h3" align="center">
            WOMEN
          </StyledTypography>
        </StyledBox>
      </Stack>
    </>
  );
};

export default Categories;
