"use client";

import { useState, useEffect, useCallback } from "react";

interface AnimatedHeadlineProps {
  phrases: string[];
  suffix: string;
  className?: string;
}

export default function AnimatedHeadline({
  phrases,
  suffix,
  className,
}: AnimatedHeadlineProps) {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150 - Math.random() * 100);
  const period = 2000;

  const tick = useCallback(() => {
    const i = loopNum % phrases.length;
    const fullText = phrases[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 1.5);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    }
  }, [isDeleting, loopNum, phrases, text]);

  useEffect(() => {
    const ticker = setTimeout(() => tick(), delta);
    return () => clearTimeout(ticker);
  }, [text, delta, tick]);

  return (
    <h1 className={className}>
      {text}
      <span className="border-r-4 border-primary animate-blink" />
      {suffix}
    </h1>
  );
}
