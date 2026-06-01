import { useEffect, useState } from "react";

/**
 * Returns the current time, but only after the component has mounted on the
 * client. During SSR and the first client render it returns `null`, which keeps
 * the server- and client-rendered markup identical and avoids hydration
 * mismatches. Pass `tick` to update every second for a live clock.
 */
export function useClock({ tick = false }: { tick?: boolean } = {}) {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    if (!tick) return;
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, [tick]);

  return time;
}

/**
 * Renders a `[HH:MM:SS]` terminal-style timestamp. Empty until mounted so the
 * server and client agree on first paint. Pass `tick` for a live clock.
 */
export function TimeStamp({ tick = false }: { tick?: boolean }) {
  const time = useClock({ tick });
  return <span>{time ? `[${time.toLocaleTimeString()}]` : ""}</span>;
}
