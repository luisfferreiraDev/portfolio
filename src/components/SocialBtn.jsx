import { Box, IconButton, Typography } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";

const SocialBtn = ({ icon, text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IconButton size="large" sx={{ justifyContent: "center" }}>
        {icon}
      </IconButton>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        {text}
      </Typography>
    </Box>
  );
};

export default SocialBtn;
