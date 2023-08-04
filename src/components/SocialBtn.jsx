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
      {icon}
      <Typography variant="h6" sx={{ textAlign: "center", pl: 2 }}>
        {text}
      </Typography>
    </Box>
  );
};

export default SocialBtn;
