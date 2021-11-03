import React, { CanvasHTMLAttributes, useEffect, useRef } from "react";

export interface CanvasProps extends CanvasHTMLAttributes<HTMLCanvasElement> {
  draw: (context: CanvasRenderingContext2D, frameCount: number) => void;
}

function Canvas(props: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { draw, ...rest } = props;

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");
    let currentFrame = 0;
    let animationFrameId: number;

    const render = () => {
      if (context != null) {
        currentFrame++;
        props.draw(context, currentFrame);
        animationFrameId = window.requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [props.draw]);

  return <canvas ref={canvasRef} {...rest} />;
}

export default Canvas;
