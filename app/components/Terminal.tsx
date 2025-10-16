"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import MatrixBackground from "./MatrixBackground";
import { usePet } from "./DigitalPet";
import { useBootSequence } from "./useBootSequence";
import { CommandInput } from "./CommandInput";
import { commands, unlockCommandsBasedOnBehavior } from "./commands";
import type { TerminalLine } from "./../utils/types";
import TerminalCommands from "./help";

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
  const [showMatrix, setShowMatrix] = useState(true);

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

  useEffect(() => {
    scrollToBottom();
  }, [lines, scrollToBottom]);

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
      const helpCmd = commands.find((c: { name: string }) => c.name === "help");
      if (helpCmd) {
        setTimeout(async () => {
          const helpContent = await helpCmd.handler();
          setLines((lines) => [
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
    if (input === "clear" || input === "cls") {
      setLines([]);
      setCurrentInput("");
      return;
    }
    const trimmedInput = input.trim();
    if (!trimmedInput) return;
    setCommandHistory((h) => [...h, trimmedInput]);
    setHistoryIndex(-1);

    const updatedCommands = unlockCommandsBasedOnBehavior();
    setDiscoveredCommands(new Set(updatedCommands));

    setLines((lines) => [
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
      setDiscoveredCommands((prev) => new Set([...prev, command.name]));
      try {
        const result = await command.handler(args, {
          setDiscoveredCommands,
          pet,
          setShowMatrix,
          discoveredCommands,
          commands,
        });
        if (result) {
          setLines((lines) => [
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
        setLines((lines) => [
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
      setLines((lines) => [
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
    <div className="md:flex md:items-start md:justify-center md:min-h-screen relative bg-[#0d0d12]">
      {/* Matrix Background */}
      <MatrixBackground show={showMatrix} intensity="medium" />

      {/* Terminal Area */}
      <div
        ref={terminalRef}
        style={{
          background: "rgba(13, 13, 18, 0.85)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: `1px solid ${MATRIX_THEME.accent}`,
          color: MATRIX_THEME.text,
          borderRadius: "1rem",
          minHeight: "600px",
          padding: "1.5rem",
          boxShadow: `0 4px 32px 0 ${MATRIX_THEME.accent}22, inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
          overflowY: "auto",
          flexGrow: 1,
          maxWidth: "900px",
          margin: "1rem",
        }}
      >
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#03ff7e]">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-600"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-[#03ff7e]"></div>
          </div>
          <div className="text-[#03ff7e] text-sm">SUHASA.exe</div>
        </div>
        <div className="space-y-2 mb-4">
          {lines.map((line) => (
            <div key={line.id} style={{ lineHeight: 1.5 }}>
              {line.content}
            </div>
          ))}
        </div>

        {/* Input */}
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
        <div
          className="text-[#b8bec6] mt-5 text-center text-sm"
          style={{ userSelect: "none" }}
        >
          Press Tab for autocomplete • Use arrow keys for command history
        </div>
      </div>
      <div
        className="sticky top-20  font-mono"
        style={{ alignSelf: "start" }}
      >
        <TerminalCommands />
      </div>
    </div>
  );
}
