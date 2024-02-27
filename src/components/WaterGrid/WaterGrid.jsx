import anime from "animejs";
import React, { useEffect, useState, useMemo } from "react";

const GRID_WIDTH = 30;

const WaterGrid = ({ welcomeDone }) => {
  return (
    <div className="grid place-content-center">
      <Dot welcomeDone={welcomeDone} />
    </div>
  );
};

const Dot = ({}) => {
  const [animeTrigger, setAnimeTrigger] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimeTrigger((prev) => prev + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (animeTrigger >= 0) {
      anime({
        targets: ".dot-point",
        scale: [
          { value: 1.35, easing: "easeOutSine", duration: 250 },
          { value: 1, easing: "easeInOutQuad", duration: 500 },
        ],
        translateY: [
          { value: -25, easing: "easeOutSine", duration: 250 },
          { value: 0, easing: "easeInOutQuad", duration: 500 },
        ],
        opacity: [
          { value: 1, easing: "easeOutSine", duration: 250 },
          { value: 1, easing: "easeInOutQuad", duration: 500 },
        ],
        delay: anime.stagger(100, {
          grid: [GRID_WIDTH, GRID_WIDTH],
          from: Math.floor(Math.random() * 890),
        }),
      });
    }
  }, [animeTrigger]);

  const handleDotClick = (e) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: 25, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_WIDTH],
        from: e.target.dataset.index,
      }),
    });
  };

  const dots = useMemo(() => {
    const dots = [];
    for (let i = 0; i < GRID_WIDTH; i++) {
      for (let j = 0; j < GRID_WIDTH; j++) {
        const index = i * GRID_WIDTH + j;
        dots.push(
          <div
            onClick={handleDotClick}
            className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
            data-index={index}
            key={`${i}-${j}`}
          >
            <div
              className="dot-point h-1.5 w-1.5 rounded-full bg-gradient-to-b from-gray-500 to-gray-800 opacity-50 group-hover:from-white group-hover:to-black"
              data-index={index}
            ></div>
          </div>
        );
      }
    }
    return dots;
  }, []);

  return <div style={{ gridTemplateColumns: `repeat(${GRID_WIDTH},1fr)` }} className="grid w-fit">{dots}</div>;
};

export default WaterGrid;