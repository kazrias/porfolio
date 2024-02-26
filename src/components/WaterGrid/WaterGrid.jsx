import anime from "animejs"
import { useEffect, useState } from "react";

const GRID_WIDTH = 30;
// const GRID_HEIGHT = 25;

const WaterGrid = ({ welcomeDone }) => {
  return (
    <div className=" grid  place-content-center ">
      <Dot welcomeDone={welcomeDone} />
    </div>
  )
}

const Dot = ({ welcomeDone }) => {

  const [intervalId, setIntervalId] = useState(null);
  const [clicked, setClicked] = useState(false)
  useEffect(() => {
    const interval = setInterval(() => {
      // Increment animationTrigger to trigger useEffect on each change
      setIntervalId(interval);
    }, 6000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [clicked]); // Run effect only on component mount

  useEffect(() => {
    let randIndex = Math.floor(Math.random() * 890)
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
        from: randIndex
      }),
    })
  }, [intervalId]);


  const handleDotClick = (e) => {
    clearInterval(intervalId)
    setClicked(prev => !prev)
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duratoin: 500 },
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
        from: e.target.dataset.index
      }),
    })
  }
  const dots = [];
  let index = 0;
  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_WIDTH; j++) {
      // if (j < GRID_WIDTH - i) {
      dots.push(
        <div onClick={handleDotClick} className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600" data-index={index} key={`${i}-${j}`}>
          <div className="dot-point h-1.5 w-1.5 rounded-full bg-gradient-to-b from-gray-500 to-gray-800 opacity-50 group-hover:from-white group-hover:to-black" data-index={index}></div>
        </div>);
      // }
      // else {
      //   dots.push(
      //     <button disabled style={{ opacity: "0 !important" }} onClick={handleDotClick} className="group  rounded-full p-2 transition-colors " data-index={index} key={`${i}-${j}`}>
      //       <div className="dot-point  h-0 w-0 rounded-full bg-gradient-to-b from-red-700 to-red-400 opacity-0 group-hover:from-indigo-600 group-hover:to-white" data-index={index}></div>
      //     </button>
      //   )
      // }
      index++;
    }
  }
  return <div style={{ gridTemplateColumns: `repeat(${GRID_WIDTH},1fr)` }} className="grid w-fit">
    {dots}
  </div>
}
export default WaterGrid