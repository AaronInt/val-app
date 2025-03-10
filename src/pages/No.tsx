import * as motion from "motion/react-client";
import pikachu from "../assets/pikachu.gif";

function No() {
  return (
    <div>
      <motion.img
        style={{ height: "400px", width: "auto" }}
        src={pikachu}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      ></motion.img>
      <motion.h2
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      >
        Ripppppp
      </motion.h2>
    </div>
  );
}

export default No;
