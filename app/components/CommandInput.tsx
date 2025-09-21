import React, { useRef, useEffect } from "react";

type CommandInputProps = {
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  inputRef?: React.Ref<HTMLInputElement>;
  accent?: string;
  text?: string;
  description?: string;
};

const blinkAnimationStyle = `
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;

export function CommandInput({
  value,
  onChange,
  onKeyDown,
  inputRef,
  accent = "#03ff7e",
  text = "#ffffff",
  description = "#b8bec6",
}: CommandInputProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hiddenInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef && typeof inputRef === "object" && hiddenInputRef.current) {
      (inputRef as React.MutableRefObject<HTMLInputElement>).current = hiddenInputRef.current;
    }
  }, [inputRef]);

  const handleContainerClick = () => {
    hiddenInputRef.current?.focus();
  };

  return (
    <>
      <style>{blinkAnimationStyle}</style>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "monospace",
          userSelect: "none",
          gap: "0.5rem",
        }}
        className="items-center justify-center"
      >
        <span style={{ color: accent, userSelect: "none" }}>CONSCIOUSNESS</span>
        <span style={{ color: description, margin: "0 0.5rem", userSelect: "none" }}>❯</span>
        <div
          ref={containerRef}
          onClick={handleContainerClick}
          style={{
            position: "relative",
            flex: 1,
            minHeight: "1.5em",
            paddingLeft: 2,
            color: text,
            background: "transparent",
            whiteSpace: "pre",
            cursor: "text",
          }}
        >
          <span>{value}</span>
          <span
            style={{
              color: accent,
              animation: "blink 1s step-start infinite",
              fontWeight: "bold",
              position: "absolute",
              top: 0,
              left: 2 + (value.length * 8), 
              userSelect: "none",
              fontSize: "1rem",
              lineHeight: "1.5em",
            }}
          >
            █
          </span>
        </div>

        <input
          ref={hiddenInputRef}
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          onKeyDown={onKeyDown}
          style={{
            position: "absolute",
            opacity: 0,
            pointerEvents: "none",
            height: 0,
            width: 0,
          }}
          spellCheck={false}
          autoComplete="off"
          autoFocus
          title="Command input"
          placeholder="Type your command"
        />
      </div>
    </>
  );
}
