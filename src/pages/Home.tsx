//import { useState } from "react";
import Button from "../components/ui/Button/Button";
import { motion } from "motion/react";

function Home() {
  //const [click, setClick] = useState(false);
  return (
    <>
      {/* <motion.h1 animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
            }}
            >Ready to Continue?</motion.h1> */}
      <h1>Are you ready to continue?</h1>
      <Button text="Yes" />
      <Button text="No" />
    </>
  );
}

export default Home;
