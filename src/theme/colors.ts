// Horsera Design System — Color Tokens
// Use these as reference for Tailwind arbitrary values e.g. bg-[#FAF7F3]

export const colors = {
  // Backgrounds
  parchment: '#FAF7F3',   // Primary screen background
  stone:     '#F0EBE4',   // Secondary surface, hover states
  dusk:      '#1C1510',   // Dark mode base, FAB background

  // Primary accent — Cognac (the brand color)
  cognac:       '#8C5A3C',
  cognacLight:  '#C2896A',
  cognacSubtle: '#F5EDE6',

  // Secondary accent — Champagne / Gold
  champagne:      '#C9A96E',
  champagneMuted: '#E8D9B8',
  champagneSubtle:'#F8F3EC',

  // Semantic — Progress states
  progress:  '#7D9B76', // Mastered / improving (sage green)
  working:   '#C9A96E', // In progress (champagne)
  attention: '#C4714A', // Not yet / needs focus (terracotta)

  // Cadence AI — Slate blue
  cadence:       '#6B7FA3',
  cadenceLight:  '#EEF2F8',
  cadenceBorder: '#6B7FA3',

  // Text
  ink:       '#1A140E', // Primary text
  inkMuted:  '#7A6B5D', // Secondary text
  inkSubtle: '#B5A898', // Placeholder, metadata

  // Surfaces
  white:  '#FFFFFF',
  border: '#EDE7DF',
} as const;

// Milestone state types
export type MilestoneState = 'untouched' | 'working' | 'mastered';

export const milestoneColors: Record<MilestoneState, string> = {
  untouched: colors.stone,
  working:   colors.champagne,
  mastered:  colors.cognac,
};
