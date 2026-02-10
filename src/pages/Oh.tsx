import Button from "../components/ui/Button/Button";
import heartLick from "../assets/heartlick.gif";
import { useEffect, useRef } from "react";
import backgroundMusic from "../assets/oui-(slowed)-edit-made-with-Voicemod.mp3";

function Oh() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    audioRef.current?.play().catch((error) => {
      console.log("Autoplay prevented:", error);
    });
  }, []);

  return (
    <>
      <audio ref={audioRef} src={backgroundMusic} />

      <h1>Oh?</h1>
      {/* <Button text="Next" navigateTo="/Yes" /> */}
      <div style={{ marginTop: "1rem" }}>
        <img
          src={heartLick}
          alt="please"
          style={{
            width: "25rem",
            height: "auto",
            opacity: 0, // Start fully transparent
            animation: "fadeIn 5s forwards", // Apply fade-in animation
          }}
        />
      </div>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
}

export default Oh;