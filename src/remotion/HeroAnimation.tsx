import { AbsoluteFill, interpolate, useCurrentFrame, Sequence, Easing } from "remotion";
import React from "react";

export const HeroAnimation: React.FC = () => {
  const frame = useCurrentFrame();
  
  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const translateY = interpolate(frame, [0, 30], [50, 0], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "transparent", justifyContent: "center", alignItems: "center" }}>
      <div 
        style={{ 
          opacity, 
          translate: `0px ${translateY}px`,
          fontSize: "72px", 
          fontWeight: 800, 
          color: "oklch(55% 0.22 250)", 
          textAlign: "center",
          fontFamily: "var(--font-jakarta), sans-serif",
          lineHeight: 1.1,
          letterSpacing: "-0.03em"
        }}
      >
        Nolkha & Co.
      </div>
      <Sequence from={20} layout="none">
        <Subtitle />
      </Sequence>
    </AbsoluteFill>
  );
};

const Subtitle: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const translateY = interpolate(frame, [0, 30], [20, 0], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <div 
      style={{ 
        opacity, 
        translate: `0px ${translateY}px`,
        fontSize: "32px", 
        color: "oklch(20% 0.02 250)", 
        marginTop: "24px", 
        fontWeight: 600, 
        textAlign: "center",
        fontFamily: "var(--font-jakarta), sans-serif",
        letterSpacing: "-0.01em"
      }}
    >
      Precision Accounting.
    </div>
  );
};
