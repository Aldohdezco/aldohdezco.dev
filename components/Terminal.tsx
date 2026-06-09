'use client';

import { useEffect, useRef, useState } from 'react';
import { terminalCommands, terminalWelcome, type Lang } from '@/app/content';

type OutputLine = {
  type: 'input' | 'output';
  content: string;
};

type TerminalProps = {
  lang: Lang;
};

export function Terminal({ lang }: TerminalProps) {
  const placeholderText = lang === 'es' ? "Prueba 'help'" : "Try 'help'";
  const [output, setOutput] = useState<OutputLine[]>([
    { type: 'output', content: terminalWelcome[lang] }
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();

    const newLines: OutputLine[] = [
      { type: 'input', content: `aldo@portfolio:~$ ${command}` }
    ];

    if (cmd === '') {
      // Enter vacío, no hacer nada
    } else if (cmd === 'clear') {
      setOutput([]);
      setInput('');
      return;
    } else if (terminalCommands[cmd]) {
      newLines.push({ type: 'output', content: terminalCommands[cmd][lang] });
    } else {
      newLines.push({
        type: 'output',
        content: `Comando no reconocido: ${command}. Usa "help" para ver comandos disponibles.`
      });
    }

    setOutput((prev) => [...prev, ...newLines]);
    setInput('');
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
    inputRef.current?.focus();
  }, [output]);

  return (
    <div className="terminal-wrapper">
      <div className="terminal-header">
        <span>Terminal</span>
        <div className="terminal-buttons">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div
        className="terminal-body"
        ref={containerRef}
        onMouseDown={() => inputRef.current?.focus()}
      >
        {output.map((line, idx) => (
          <div key={idx} className={`terminal-line ${line.type}`}>
            {line.type === 'input' ? (
              <span className="prompt">{line.content}</span>
            ) : (
              <pre className="output-text">{line.content}</pre>
            )}
          </div>
        ))}

        <div className="terminal-line input-active">
          <span className="prompt">aldo@portfolio:~$ </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCommand(input);
              }
            }}
            autoComplete="off"
            spellCheck={false}
            placeholder={placeholderText}
            autoFocus
            className="terminal-input"
          />
        </div>
      </div>
    </div>
  );
}

