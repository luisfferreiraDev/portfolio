import { Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";

const Intro = () => {
  const handleScroll = () => {
    const section = document.getElementById("aboutSection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          pl: 10,
        }}
      >
        <Box sx={{ textAlign: "left", mb: 4 }}>
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
        <Box sx={{ textAlign: "left" }}>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 150, delay: 0.3 }}
          >
            <Typography variant="overline">
              With a strong foundation in both frontend and backend
              technologies, I bring ideas to code.
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 150, delay: 0.4 }}
          >
            <Button variant="outlined" onClick={handleScroll}>
              About me
            </Button>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Intro;
