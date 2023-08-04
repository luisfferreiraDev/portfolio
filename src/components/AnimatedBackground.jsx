import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const gradientProperties = [
  {
    gradient:
      "linear-gradient(109.6deg, rgb(0, 0, 0) 11.2%, rgb(11, 132, 145) 91.1%)",
  },
  {
    gradient:
      "linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%)",
  },
  {
    gradient:
      "linear-gradient(45deg, rgba(63,61,85,1) 0%, rgba(51,51,51,1) 100%)",
  },
];

const transition = {
  duration: 6,
  repeat: Infinity,
  repeatType: "reverse",
};

const AnimatedBackground = () => {
  const [currentGradientIndex, setCurrentGradientIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGradientIndex(
        (prevIndex) => (prevIndex + 1) % gradientProperties.length
      );
    }, transition.duration * 1000);

    return () => clearInterval(interval);
  }, []);

  const { gradient } = gradientProperties[currentGradientIndex];

  return (
    <motion.div
      initial={{ opacity: 1, rotate: 0, scale: 2 }}
      animate={{
        opacity: 1,
        rotate: 360,
        scale: 2,
        background: gradient,
      }}
      exit={{ opacity: 0 }}
      transition={transition}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        transformOrigin: "center center",
      }}
    />
  );
};

export default AnimatedBackground;
