"use client";

import { Player } from "@remotion/player";
import { HeroAnimation } from "@/remotion/HeroAnimation";

export function HeroVideo() {
  return (
    <div className="w-full max-w-4xl mx-auto h-[400px] flex items-center justify-center relative z-10 pointer-events-none">
      <Player
        component={HeroAnimation}
        durationInFrames={120}
        compositionWidth={1200}
        compositionHeight={400}
        fps={60}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
        }}
        autoPlay
        loop
      />
    </div>
  );
}
