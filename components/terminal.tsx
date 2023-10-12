import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const OPTIONS = {
  scale: 1.1,
  speed: 300,
  max: 3,
  glare: true,
  "max-glare": 0.6,
};

export function ProfileTerminal() {
  const tilt = useRef(null);

  useEffect(() => {
    if (tilt.current !== null) {
      return VanillaTilt.init(tilt.current, OPTIONS);
    }
    // cleanup function
    return () => {};
  }, []);

  return (
    <div
      ref={tilt}
      className={`min-w-xl bg-gray-400 opacity-30 rounded-lg p-24`}
    >
      hi, im Alex Lu
    </div>
  );
}
