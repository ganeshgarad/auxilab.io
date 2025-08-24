import type { ITheme } from '@xterm/xterm';

const style = getComputedStyle(document.documentElement);
const cssVar = (token: string) => style.getPropertyValue(token) || undefined;

export function getTerminalTheme(overrides?: ITheme): ITheme {
  return {
    cursor: cssVar('--auxilab-elements-terminal-cursorColor'),
    cursorAccent: cssVar('--auxilab-elements-terminal-cursorColorAccent'),
    foreground: cssVar('--auxilab-elements-terminal-textColor'),
    background: cssVar('--auxilab-elements-terminal-backgroundColor'),
    selectionBackground: cssVar('--auxilab-elements-terminal-selection-backgroundColor'),
    selectionForeground: cssVar('--auxilab-elements-terminal-selection-textColor'),
    selectionInactiveBackground: cssVar('--auxilab-elements-terminal-selection-backgroundColorInactive'),

    // ansi escape code colors
    black: cssVar('--auxilab-elements-terminal-color-black'),
    red: cssVar('--auxilab-elements-terminal-color-red'),
    green: cssVar('--auxilab-elements-terminal-color-green'),
    yellow: cssVar('--auxilab-elements-terminal-color-yellow'),
    blue: cssVar('--auxilab-elements-terminal-color-blue'),
    magenta: cssVar('--auxilab-elements-terminal-color-magenta'),
    cyan: cssVar('--auxilab-elements-terminal-color-cyan'),
    white: cssVar('--auxilab-elements-terminal-color-white'),
    brightBlack: cssVar('--auxilab-elements-terminal-color-brightBlack'),
    brightRed: cssVar('--auxilab-elements-terminal-color-brightRed'),
    brightGreen: cssVar('--auxilab-elements-terminal-color-brightGreen'),
    brightYellow: cssVar('--auxilab-elements-terminal-color-brightYellow'),
    brightBlue: cssVar('--auxilab-elements-terminal-color-brightBlue'),
    brightMagenta: cssVar('--auxilab-elements-terminal-color-brightMagenta'),
    brightCyan: cssVar('--auxilab-elements-terminal-color-brightCyan'),
    brightWhite: cssVar('--auxilab-elements-terminal-color-brightWhite'),

    ...overrides,
  };
}
