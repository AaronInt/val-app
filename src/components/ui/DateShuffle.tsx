import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button/Button";
import toscano from "../../assets/toscano.jpg"
import { useEffect, useRef } from "react";
import backgroundMusic from "../../assets/doodle-dance-song-made-with-Voicemod.mp3";
import './DateShuffle.css';

function DateShuffle() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    audioRef.current?.play().catch((error) => {
      console.log("Autoplay prevented:", error);
    });
  }, []);

  // Function to generate random dates
  const generateRandomDates = (count) => {
    const randomDates = [];
    for (let i = 0; i < count; i++) {
      const randomDate = new Date(
        2026, // Year
        Math.floor(Math.random() * 12), // Random month (0-11)
        Math.floor(Math.random() * 28) + 1 // Random day (1-28 to avoid invalid dates)
      );
      randomDates.push(randomDate.toDateString());
    }
    return randomDates;
  };

  const dates = generateRandomDates(10); // Generate 5 random dates
  const [currentDate, setCurrentDate] = useState(dates[0]); // State for the displayed date
  const [isShuffling, setIsShuffling] = useState(false); // State to control the shuffle
  const [showFinalDate, setShowFinalDate] = useState(false); // State to control whether the final date is shown

  useEffect(() => {
    let interval;

    if (isShuffling) {
      // Shuffle through dates quickly
      interval = setInterval(() => {
        setCurrentDate((prev) => {
          const currentIndex = dates.indexOf(prev);
          const nextIndex = (currentIndex + 1) % dates.length;
          return dates[nextIndex];
        });
      }, 100); // Change date every 100ms
    }

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [isShuffling, dates]);

  const handleShuffle = () => {
    setIsShuffling(true); // Start shuffling
    setShowFinalDate(false); // Hide the final date while shuffling
    setTimeout(() => {
      setIsShuffling(false); // Stop shuffling
      setCurrentDate("February 15, 2026 @ 7PM EST"); // Land on a random date from the array
      setShowFinalDate(true); // Show the final date after shuffling
    }, 3000); // Stop shuffling after 2 seconds
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      {/* {isShuffling ? <audio ref={audioRef} src={backgroundMusic} /> : null} */}
      <audio ref={audioRef} src={backgroundMusic} />
      <h1 className="jumping-element">Your Valentine's date is scheduled for:</h1>
      <motion.h1
        style={{ fontSize: "2rem", fontWeight: "bold" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {isShuffling || showFinalDate ? currentDate : ""}
      </motion.h1>
      {showFinalDate ? <div><img src={toscano} style={{ width: "75%", height: "auto" }}/><Button variant="secondary" text="Secret" navigateTo="/Oh" /></div> : null}
      
      {!isShuffling && !showFinalDate && (
        <Button text="Reveal" navigateTo="#" onClick={handleShuffle} />
      )}
      {/* {showFinalDate ? <Button text="Where at?" /> : null} */}
    </div>
  );
}

export default DateShuffle;
