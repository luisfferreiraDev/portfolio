import { Box, Typography, ButtonBase } from "@mui/material";

const InfoBox = ({ title, text, onClick, icon }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="left" p={2}>
      <Box mr={2}>{icon}</Box>

      <Box sx={{ textAlign: "left" }}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="overline">{text}</Typography>
      </Box>
    </Box>
  );
};

export default InfoBox;
