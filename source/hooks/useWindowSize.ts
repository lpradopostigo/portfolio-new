import { useLayoutEffect, useRef, useState } from 'react';

interface Size {
  width: number;
  height: number;
}

function useWindowSize() {
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });
  const root = useRef(document.getElementsByTagName("html")[0])
  useLayoutEffect(() => {
    const updateSize = () =>
      setSize({ width: root.current.getBoundingClientRect().width, height: window.innerHeight });

    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export default useWindowSize;
