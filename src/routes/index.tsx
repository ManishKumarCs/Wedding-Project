import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
import { AnimatePresence, motion } from "framer-motion";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [opened, setOpened] = useState(false);

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
