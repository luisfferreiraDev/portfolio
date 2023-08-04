import { Box, Typography, ButtonBase } from "@mui/material";
import { motion } from "framer-motion";

const InfoBox = ({ title, text, sectionId, icon, delay = 0 }) => {
  const handleScroll = () => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 150, delay: delay }}
      style={{ width: "100%", height: "100%" }}
      className="glass-effect"
    >
      <ButtonBase onClick={handleScroll} sx={{ width: "100%", height: "100%" }}>
        <Box display="flex" alignItems="center" justifyContent="left" p={2}>
          <Box mr={2}>{icon}</Box>

          <Box sx={{ textAlign: "left" }}>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="overline">{text}</Typography>
          </Box>
        </Box>
      </ButtonBase>
    </motion.div>
  );
};

export default InfoBox;
