"use client";

import React from "react";

const CyberGlobe = React.memo(() => {
  const dotCount = 50;
  const lineCount = 12;

  const dots = Array.from({ length: dotCount }).map((_, i) => {
    const phi = Math.acos(-1 + (2 * (i + 0.5)) / dotCount);
    const theta = Math.sqrt(dotCount * Math.PI) * phi;

    const x = Math.cos(theta) * Math.sin(phi);
    const y = Math.sin(theta) * Math.sin(phi);
    const z = Math.cos(phi);

    return { x, y, z };
  });

  return (
    <div className="globe-container">
      <div className="globe">
        {Array.from({ length: lineCount }).map((_, i) => (
          <div
            key={`meridian-${i}`}
            className="globe-line"
            style={{ transform: `rotateY(${i * (180 / lineCount)}deg)` }}
          />
        ))}
        <div
          className="globe-line equator"
          style={{ transform: "rotateX(90deg)" }}
        ></div>
        <div className="globe-sphere"></div>
        {dots.map((dot, i) => (
          <div
            key={i}
            className="globe-dot"
            style={
              {
                "--x": dot.x,
                "--y": dot.y,
                "--z": dot.z,
                animationDelay: `${Math.random() * -5}s`,
              } as React.CSSProperties
            }
          ></div>
        ))}
      </div>
      <style jsx>{`
        .globe-container {
          width: 100%;
          height: 100%;
          min-height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
        }
        .globe {
          width: 300px;
          height: 300px;
          position: relative;
          transform-style: preserve-3d;
          animation: rotate-globe 30s infinite linear;
        }
        .globe-sphere {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: radial-gradient(
            circle at 30% 30%,
            var(--primary-translucent),
            transparent 60%
          );
          opacity: 0.5;
        }
        .globe-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 1px solid var(--primary-translucent);
          box-sizing: border-box;
        }
        .globe-dot {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 6px;
          height: 6px;
          background: var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 8px var(--primary);
          transform: translate(-50%, -50%) translateX(calc(var(--x) * 150px))
            translateY(calc(var(--y) * 150px))
            translateZ(calc(var(--z) * 150px));
          animation: dot-pulse 2s infinite alternate;
        }
        @keyframes rotate-globe {
          from {
            transform: rotateY(0deg) rotateX(10deg);
          }
          to {
            transform: rotateY(360deg) rotateX(10deg);
          }
        }
        @keyframes dot-pulse {
          from {
            transform: translate(-50%, -50%) translateX(calc(var(--x) * 150px))
              translateY(calc(var(--y) * 150px))
              translateZ(calc(var(--z) * 150px)) scale(0.8);
            opacity: 0.7;
          }
          to {
            transform: translate(-50%, -50%) translateX(calc(var(--x) * 150px))
              translateY(calc(var(--y) * 150px))
              translateZ(calc(var(--z) * 150px)) scale(1.2);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
});

export default CyberGlobe;
