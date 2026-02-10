import heart from "../assets/heart-gif-26.gif";
import mocha from "../assets/mocha.gif";
import couple from "../assets/couple.jpg"
import * as motion from "motion/react-client";
import Button from "../components/ui/Button/Button";
import { useEffect, useRef } from "react";
import backgroundMusic from "../assets/yoshi's-island---athletic-theme-made-with-Voicemod.mp3"; // Import your background music file

function Thanks() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    audioRef.current?.play().catch((error) => {
      console.log("Autoplay prevented:", error);
    });
  }, []);

  // Array of image sources (you can add more images here)
  const images = [
    mocha,
    couple, // Replace with other image imports if needed
    heart,
  ];

  return (
    <div>
      <audio ref={audioRef} src={backgroundMusic} />
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        {images.map((src, index) => (
          <motion.img
            key={index}
            style={{ height: "15rem", width: "auto" }} // Adjust size as needed
            src={src}
            initial={{ opacity: 0, scale: 5, y: -500 }} // Start large, off-screen
            animate={{ opacity: 1, scale: 1, y: 0 }} // Slam into place
            transition={{
              duration: 0.6, // Adjust the duration for the slam effect
              type: "spring", // Use spring animation for a bouncy effect
              stiffness: 300, // Increase stiffness for a harder slam
              damping: 10, // Reduce damping for more bounce
            }}
          />
        ))}
      </div>

      <motion.h2
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      >
        {" "}
        Love you!!!
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      >
        <Button
          text="Check time/place of your date"
          navigateTo="/DateSetting"
        />
      </motion.div>
    </div>
  );
}

export default Thanks;