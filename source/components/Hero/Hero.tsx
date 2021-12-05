import React from "react";
import Canvas from "../Canvas";
import useWindowSize from "../../hooks/useWindowSize";

function Hero() {
  const { width, height } = useWindowSize();

  return (
    <section id="hero" className="flex flex-col gap-4" style={{height: window.innerHeight*.9}}>
      <h1 className="text-white text-center font-display-1 text-yellow-300 text-2xl mt-10">
        Luis Angel <br />
        Prado Postigo
      </h1>
      <span className="text-white text-center font-display-2 font-medium uppercase">
        front end developer
      </span>
      <Canvas
        style={{ position: "absolute", top: 0, zIndex: -1, left: 0 }}
        draw={draw}
        height={height}
        width={width}
      />
    </section>
  );
}

function draw(context: CanvasRenderingContext2D, currentFrame: number) {
  if (context != null) {
    context.globalCompositeOperation = "source-over";
    context.fillStyle = "hsla(0,0%,0%,0.7)";
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    context.globalCompositeOperation = "lighter";
    let _y = 0;
    let _x = 0;
    let x = 0;
    let y = 0;
    let b = 0;
    const t = currentFrame * (1 / 60);
    for (let i = 0; i < 1; i++) {
      x = 0;
      context.beginPath();
      for (let j = 0; j < 400; j++) {
        x += 0.5 * Math.sin(5);
        y = (x * Math.sin(i + 2.0 * t + x / 5)) / 13;
        _x = x * Math.cos(b) + y * Math.sin(i);
        _y = x * Math.sin(b) + y * Math.cos(i);
        b = (j * 1.2999 * Math.PI) / 4;
        context.lineWidth = 0.15;
        context.lineTo(
          window.innerWidth / 2 + _x,
          window.innerHeight / 1.6 + _y
        );
      }
      let g = context.createLinearGradient(
        window.innerWidth / 2 + _x,
        window.innerHeight / 2 + _y,
        1,
        window.innerWidth / 2 + _x
      );
      g.addColorStop(0.1, "rgb(96, 165, 250)");
      g.addColorStop(0.5, "rgb(75, 85, 99)");
      context.strokeStyle = g;
      context.stroke();
    }
  }
}

export default Hero;
