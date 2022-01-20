import React, { useEffect, useRef } from "react";

function Canvas(props) {
  const canvasRef = useRef(null);
  const { draw, ...rest } = props;

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");
    let currentFrame = 0;
    let animationFrameId;

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
