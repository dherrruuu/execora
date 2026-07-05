import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = total > 0 ? (scrollTop / total) * 100 : 0;

      setProgress(Math.min(100, Math.max(0, nextProgress)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div aria-hidden="true" className="scroll-progress">
      <span
        className="scroll-progress__bar"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}