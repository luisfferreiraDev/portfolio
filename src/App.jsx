import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import { Box } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <Box sx={{ height: "100vh" }}></Box>
    </>
  );
}

export default App;
