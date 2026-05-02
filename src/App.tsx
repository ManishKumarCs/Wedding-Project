import { useState, useEffect } from "react";
import { DoorIntro } from "@/components/wedding/DoorIntro";
import { Hero } from "@/components/wedding/Hero";
import { Countdown } from "@/components/wedding/Countdown";
import { Events } from "@/components/wedding/Events";
import { SaveTheDate } from "@/components/wedding/SaveTheDate";
import { Venue } from "@/components/wedding/Venue";
import { Family } from "@/components/wedding/Family";
import { Fireworks } from "@/components/wedding/Fireworks";
import { Petals } from "@/components/wedding/Petals";
import { MusicToggle } from "@/components/wedding/MusicToggle";
import { AnimatePresence } from "framer-motion";
import "./styles.css";

function App() {
  const [opened, setOpened] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Log debugging info
    console.log("App mounted");
    console.log("Environment:", import.meta.env.MODE);
    
    // Check if all required assets are loading
    const checkAssets = () => {
      const css = document.querySelector('link[href*="index"]');
      const js = document.querySelector('script[src*="index"]');
      
      if (!css || !js) {
        setError("Critical assets failed to load");
      }
    };

    setTimeout(checkAssets, 2000);
  }, []);

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-red-50">
        <div className="max-w-md text-center p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Loading Error</h1>
          <p className="text-gray-700 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-gradient-petal">
      <Petals />
      <MusicToggle active={opened} />
      <Hero />
      <Countdown />
      <Events />
      <SaveTheDate />
      <Venue />
      <Family />
      <Fireworks />

      <AnimatePresence>
        {!opened && <DoorIntro key="intro" onOpen={() => setOpened(true)} />}
      </AnimatePresence>
    </main>
  );
}

export default App;
