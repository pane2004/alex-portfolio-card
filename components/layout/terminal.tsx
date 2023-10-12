import { ReactNode, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const OPTIONS = {
  scale: 1.1,
  speed: 300,
  max: 3,
  glare: true,
  "max-glare": 0.2,
};

export function Terminal({ children }: { children: ReactNode }) {
  const tilt = useRef(null);

  useEffect(() => {
    if (tilt.current !== null) {
      return VanillaTilt.init(tilt.current, OPTIONS);
    }
  }, []);

  return (
    <div
      ref={tilt}
      className={`min-w-[50%] bg-gray-800 rounded-lg overflow-auto p-5`}
      style={{ backgroundColor: "rgba(31, 41, 55, 0.8)" }}
    >
      {children}
    </div>
  );
}
