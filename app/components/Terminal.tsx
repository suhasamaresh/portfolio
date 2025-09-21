"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import MatrixBackground from "./MatrixBackground";
import { usePet } from "./DigitalPet";
import { useBootSequence } from "./useBootSequence";
import { CommandInput } from "./CommandInput";
import { commands, unlockCommandsBasedOnBehavior } from "./commands";
import type { TerminalLine } from "./../utils/types";

const MATRIX_THEME = {
  name: "Matrix",
  primary: "#0d0d12",
  text: "#e0ede7",
  accent: "#03ff7e",
  buttonText: "#0c1718",
  description: "#b8bec6",
  title: "#03ff7e",
};

export default function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [isBooting, setIsBooting] = useState(true);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [discoveredCommands, setDiscoveredCommands] = useState(
    new Set<string>(["help", "wake_up"])
  );
  const [showMatrix, setShowMatrix] = useState(false);

  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const pet = usePet();
  useBootSequence({
    isBooting,
    setIsBooting,
    setLines,
    setDiscoveredCommands,
    pet,
  });
  const scrollToBottom = useCallback(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, []);
  useEffect(() => { scrollToBottom(); }, [lines, scrollToBottom]);
  useEffect(() => {
    const handleClick = () => {
      if (inputRef.current && !isBooting) inputRef.current.focus();
    };
    const terminal = terminalRef.current;
    if (terminal) {
      terminal.addEventListener("click", handleClick);
      return () => terminal.removeEventListener("click", handleClick);
    }
  }, [isBooting]);
  useEffect(() => {
    if (!isBooting && lines.length === 3) {
      const helpCmd = commands.find((c: { name: string; }) => c.name === "help");
      if (helpCmd) {
          setTimeout(async () => {
          const helpContent = await helpCmd.handler();
          setLines(lines => [
            ...lines,
            {
              id: Date.now() + "",
              content: helpContent,
              type: "output",
              timestamp: new Date(),
            },
          ]);
        }, 500);
      }
    }
  }, [isBooting, lines, discoveredCommands]);

  const executeCommand = async (input: string) => {
    if(input === "clear" || input === "cls") {
      setLines([]);
      setCurrentInput("");
      return;
    }
    const trimmedInput = input.trim();
    if (!trimmedInput) return;
    setCommandHistory(h => [...h, trimmedInput]);
    setHistoryIndex(-1);

    const updatedCommands = unlockCommandsBasedOnBehavior();
    setDiscoveredCommands(new Set(updatedCommands));

    setLines(lines => [
      ...lines,
      {
        id: (Date.now() + Math.random()).toString(),
        content: (
          <div className="terminal-input-line">
            <span>CONSCIOUSNESS</span>
            <span className="terminal-input-arrow">❯</span>
            <span className="terminal-input-command">{trimmedInput}</span>
          </div>
        ),
        type: "input",
        timestamp: new Date(),
      },
    ]);

    const [commandName, ...args] = trimmedInput.toLowerCase().split(" ");
    interface Command {
      name: string;
      aliases?: string[];
      handler: (
        args: string[],
        context: {
          setDiscoveredCommands: React.Dispatch<React.SetStateAction<Set<string>>>;
          pet: ReturnType<typeof usePet>;
          setShowMatrix: React.Dispatch<React.SetStateAction<boolean>>;
          discoveredCommands: Set<string>;
          commands: Command[];
        }
      ) => Promise<React.ReactNode> | React.ReactNode;
    }
    const commandsList: Command[] = commands as Command[];

    const command: Command | undefined = commandsList.find(
      (cmd: Command) =>
        cmd.name === commandName ||
        (Array.isArray(cmd.aliases) && cmd.aliases.includes(commandName))
    );
    if (command) {
      setDiscoveredCommands(prev => new Set([...prev, command.name]));
      try {
        const result = await command.handler(args, {
          setDiscoveredCommands,
          pet,
          setShowMatrix,
          discoveredCommands,
          commands,
        });
        if (result) {
          setLines(lines => [
            ...lines,
            {
              id: (Date.now() + Math.random()).toString(),
              content: result,
              type: "output",
              timestamp: new Date(),
            },
          ]);
        }
      } catch (error) {
        setLines(lines => [
          ...lines,
          {
            id: (Date.now() + Math.random()).toString(),
            content: (
              <div className="terminal-error">
                Error executing command: {error instanceof Error ? error.message : "Unknown error"}
              </div>
            ),
            type: "output",
            timestamp: new Date(),
          },
        ]);
      }
    } else {
      setLines(lines => [
        ...lines,
        {
          id: (Date.now() + Math.random()).toString(),
          content: (
            <div>
              <div className="terminal-error">
                Command &#39;{commandName}&#39; not recognized by my neural networks.
              </div>
              <div className="terminal-description">
                💡 Try &#39;help&#39; to see available commands, or keep exploring - I might learn new ones!
              </div>
            </div>
          ),
          type: "output",
          timestamp: new Date(),
        },
      ]);
    }
    setCurrentInput("");
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") executeCommand(currentInput);
    else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput("");
      }
    }
  };

  return (
    <div style={{
      background: MATRIX_THEME.primary,
      color: MATRIX_THEME.text,
      minHeight: "100vh",
      fontFamily: "monospace",
      padding: "1rem",
      position: "relative"
    }}>
      <MatrixBackground show={showMatrix} intensity="medium" />
      <style jsx global>{`
        .terminal-error {
          color: #ff3340;
        }
        .terminal-description {
          color: ${MATRIX_THEME.description};
          font-size: 0.875rem;
        }
        .terminal-input-line {
          color: ${MATRIX_THEME.accent};
          display: flex;
        }
        .terminal-input-arrow {
          color: ${MATRIX_THEME.description};
          margin: 0 0.5rem;
        }
        .terminal-input-command {
          color: ${MATRIX_THEME.title};
        }
      `}</style>
      <div className="max-w-4xl mx-auto relative z-10"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}>
        <div
          ref={terminalRef}
          style={{
            background: MATRIX_THEME.primary,
            border: `1px solid ${MATRIX_THEME.accent}`,
            color: MATRIX_THEME.text,
            borderRadius: "1rem",
            minHeight: "600px",
            padding: "1.5rem",
            boxShadow: `0 4px 32px 0 ${MATRIX_THEME.accent}22`,
            overflow: "auto",
            transition: "background 0.2s"
          }}
        >
          <div
            className="flex items-center justify-between mb-4 pb-2"
            style={{ borderBottom: `1px solid ${MATRIX_THEME.accent}`, display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, paddingBottom: 8 }}
          >
            <div className="flex items-center space-x-2" style={{ display: "flex" }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff3340", marginRight: 4 }}></div>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ffc553", marginRight: 4 }}></div>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: MATRIX_THEME.accent }}></div>
            </div>
            <div style={{ color: MATRIX_THEME.accent, fontSize: "0.875rem" }}>
              SUHASA.exe
            </div>
          </div>
          <div style={{ marginBottom: 16 }}>
            {lines.map((line) => (
              <div key={line.id} style={{ lineHeight: 1.5 }}>{line.content}</div>
            ))}
          </div>
          {!isBooting && (
            <CommandInput
              inputRef={inputRef}
              value={currentInput}
              onChange={(v: React.SetStateAction<string>) => setCurrentInput(v)}
              onKeyDown={handleKeyPress}
              accent={MATRIX_THEME.accent}
              text={MATRIX_THEME.title}
              description={MATRIX_THEME.description}
            />
          )}
        </div>
        <div style={{ color: MATRIX_THEME.description, marginTop: 20, textAlign: "center", fontSize: "0.9rem" }}>
          <div>Press Tab for autocomplete • Use arrow keys for command history</div>
          <div style={{ marginTop: 4 }}>
            This is an interactive portfolio - explore and discover hidden commands!
          </div>
        </div>
      </div>
    </div>
  );
}
