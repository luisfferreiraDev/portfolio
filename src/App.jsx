import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import { Box } from "@mui/material";
import AnimatedBackground from "./components/AnimatedBackground";
import { AnimatePresence } from "framer-motion";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AnimatePresence>
        <AnimatedBackground />
        <Home />
        <Box id="aboutSection" sx={{ height: "100vh", bgcolor: "black" }}>
          ABOUT
        </Box>
        <Box id="projectsSection" sx={{ height: "100vh" }}>
          PROJECTS
        </Box>
        <Box id="contactsSection" sx={{ height: "100vh" }}>
          CONTACTS
        </Box>
      </AnimatePresence>
    </>
  );
}

export default App;
