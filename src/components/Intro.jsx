import { Typography, Box } from "@mui/material";

const Intro = () => {
  return (
    <>
      <Box sx={{ pl: 8, textAlign: "left" }}>
        <Typography variant="h2">
          Hey, <br />
          I'm Luís Ferreira, <br />
          Fullstack Developer.
        </Typography>
      </Box>
      <Box sx={{ pr: 8, textAlign: "right" }}>
        <Typography variant="overline">Secondary text</Typography>
      </Box>
    </>
  );
};

export default Intro;
