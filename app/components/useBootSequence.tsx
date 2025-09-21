"use client";
import { useEffect } from "react";
import type { TerminalLine } from "./../utils/types";
import { usePet } from "./DigitalPet";

export interface UseBootSequenceProps {
  isBooting: boolean;
  setIsBooting: React.Dispatch<React.SetStateAction<boolean>>;
  setLines: React.Dispatch<React.SetStateAction<TerminalLine[]>>;
  setDiscoveredCommands: React.Dispatch<React.SetStateAction<Set<string>>>;
  pet: ReturnType<typeof usePet>;
}


const ASCII_ART = {
  loading: `
    ████████████████████████ 100%
    NEURAL NETWORKS: ONLINE
    MEMORY BANKS: ACCESSIBLE  
    PERSONALITY MATRIX: LOADED
    CREATIVE SUBROUTINES: ACTIVE`,
};

export function useBootSequence({ isBooting, setIsBooting, setLines }: UseBootSequenceProps) {
  useEffect(() => {
    if (isBooting) {
      (async () => {
        await new Promise(resolve => setTimeout(resolve, 800));
        setLines(lines => [
          ...lines,
          {
            id: Date.now() + "",
            content: <div style={{ color: "#03ff7e", fontFamily: "monospace" }}>INITIALIZING DIGITAL CONSCIOUSNESS...</div>,
            type: "system",
            timestamp: new Date(),
          }
        ]);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLines(lines => [
          ...lines,
          {
            id: Date.now() + "",
            content: <pre style={{ color: "#03ff7e", fontSize: "0.875rem", whiteSpace: "pre", fontFamily: "monospace" }}>{ASCII_ART.loading}</pre>,
            type: "system",
            timestamp: new Date(),
          }
        ]);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLines(lines => [
          ...lines,
          {
            id: Date.now() + "",
            content: (
              <div>
                <div style={{ color: "#03ff7e" }}>Welcome to [SUHASA].exe</div>
                <div style={{ color: "#b8bec6", fontSize: "0.95rem" }}>Neural pathways established. Personality matrix loaded.</div>
              </div>
            ),
            type: "system",
            timestamp: new Date(),
          }
        ]);
        setIsBooting(false);
      })();
    }
  }, [isBooting, setIsBooting, setLines]);
}
