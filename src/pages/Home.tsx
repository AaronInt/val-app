import Button from "../components/ui/Button/Button";
import please from "../assets/please.gif";
import { useEffect, useRef } from "react";
import backgroundMusic from "../assets/the-shop-song-wii-pt;-1-made-with-Voicemod.mp3";

function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    audioRef.current?.play().catch((error) => {
      console.log("Autoplay prevented:", error);
    });
  }, []);
  return (
    <>
      <audio ref={audioRef} src={backgroundMusic} />

      <h1>Will you be my Valentine?</h1>
      
        <Button text="Yes" navigateTo="/Yes" />
      
      
        <Button text="No" navigateTo="/No" />
      
      <div style={{ marginTop: "1rem" }}>
        <img src={please} alt="please" />
      </div>
    </>
  );
}

export default Home;
