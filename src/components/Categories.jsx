import { Box, Stack } from "@mui/material";

const Categories = () => {
  return (
    <>
      <Stack flexDirection={"row"} gap={4} position={"static"}>
        <Box>box1</Box>
        <Box>box2</Box>
        <Box>box3</Box>
      </Stack>
    </>
  );
};

export default Categories;
