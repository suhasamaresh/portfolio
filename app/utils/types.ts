export interface TerminalLine {
  id: string;
  content: React.ReactNode;
  type: 'input' | 'output' | 'system' | 'prompt';
  timestamp: Date;
}
export interface CommandContext {
  setDiscoveredCommands: React.Dispatch<React.SetStateAction<Set<string>>>;
  pet: any;
  setShowMatrix: (b: boolean) => void;
  discoveredCommands: Set<string>;
  commands: any[];
}
