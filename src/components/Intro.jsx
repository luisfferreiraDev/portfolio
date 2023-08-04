import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 150 }}
    >
      <Box
        className="glass-effect"
        sx={{
          height: "40vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ pl: 8, textAlign: "left" }}>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 150, delay: 0.2 }}
          >
            <Typography variant="h2">
              Hey, <br />
              I'm Luís Ferreira, <br />
              Fullstack Developer.
            </Typography>
          </motion.div>
        </Box>
        <Box sx={{ pr: 8, textAlign: "right" }}>
          <Typography variant="overline">Secondary text</Typography>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Intro;
