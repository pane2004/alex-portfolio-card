import { ReactNode } from "react";

export function Terminal({ children }: { children: ReactNode }) {
  return (
    <div
      className={`min-w-[50%] bg-gray-800 rounded-lg overflow-auto p-5`}
      style={{ backgroundColor: "rgba(31, 41, 55, 0.8)" }}
    >
      {children}
    </div>
  );
}
