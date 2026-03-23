"use client";

import { useState, useEffect, useCallback } from "react";

interface UseTypingAnimationOptions {
  lines: string[];
  typingSpeed?: number;
  lineDelay?: number;
  startDelay?: number;
}

interface UseTypingAnimationReturn {
  displayedLines: string[];
  currentLineIndex: number;
  isComplete: boolean;
}

export function useTypingAnimation({
  lines,
  typingSpeed = 30,
  lineDelay = 200,
  startDelay = 500,
}: UseTypingAnimationOptions): UseTypingAnimationReturn {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(-1);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [started, setStarted] = useState(false);

  // Start after delay
  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  // Type characters
  useEffect(() => {
    if (!started || isComplete) return;

    // Initialize first line
    if (currentLineIndex === -1) {
      setCurrentLineIndex(0);
      setDisplayedLines([""]);
      return;
    }

    const currentLine = lines[currentLineIndex];
    if (!currentLine && currentLineIndex >= lines.length) {
      setIsComplete(true);
      return;
    }

    if (currentCharIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          updated[currentLineIndex] = currentLine.slice(
            0,
            currentCharIndex + 1
          );
          return updated;
        });
        setCurrentCharIndex((c) => c + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    }

    // Move to next line
    if (currentLineIndex < lines.length - 1) {
      const timer = setTimeout(() => {
        setCurrentLineIndex((l) => l + 1);
        setCurrentCharIndex(0);
        setDisplayedLines((prev) => [...prev, ""]);
      }, lineDelay);
      return () => clearTimeout(timer);
    }

    // All done
    setIsComplete(true);
  }, [
    started,
    currentLineIndex,
    currentCharIndex,
    lines,
    typingSpeed,
    lineDelay,
    isComplete,
  ]);

  return { displayedLines, currentLineIndex, isComplete };
}
