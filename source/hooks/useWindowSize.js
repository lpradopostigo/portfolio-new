import { useLayoutEffect, useRef, useState } from "react";

function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const root = useRef(document.getElementsByTagName("html")[0]);
  useLayoutEffect(() => {
    const updateSize = () =>
      setSize({
        width: root.current.getBoundingClientRect().width,
        height: window.innerHeight,
      });

    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export default useWindowSize;
