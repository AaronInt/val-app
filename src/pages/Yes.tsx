import bear from "../assets/bear.gif";
import { useEffect, useRef } from "react";
import * as motion from "motion/react-client";
import Button from "../components/ui/Button/Button";
import backgroundMusic from "../assets/wow!-made-with-Voicemod.mp3";

function Yes() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    audioRef.current?.play().catch((error) => {
      console.log("Autoplay prevented:", error);
    });
  }, []);
  return (
    <div>
      <audio ref={audioRef} src={backgroundMusic} />
      <motion.img
        style={{ height: "400px", width: "auto" }}
        src={bear}
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
        {" "}
        Wooooohooooo!
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      >
        <Button text="Next" navigateTo="/Thanks" />
      </motion.div>
    </div>
  );
}

export default Yes;
