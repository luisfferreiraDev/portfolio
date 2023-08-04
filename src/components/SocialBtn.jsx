import { Box, ButtonBase, IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";

const SocialBtn = ({ icon, text, delay = 0, url = "#" }) => {
  const handleButtonClick = () => {
    window.open(url, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", delay: delay, stiffness: 150 }}
      style={{ width: "100%", height: "100%" }}
      className="glass-effect"
    >
      <ButtonBase
        onClick={handleButtonClick}
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
      </ButtonBase>
    </motion.div>
  );
};

export default SocialBtn;
