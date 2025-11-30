// --- TYPE DEFINITIONS ---
export interface DieConfig { type: string; max: number; defaultColor: string; label: string; hex: string; }
export interface DieInPool { id: number; type: string; }
export interface DieResult extends DieInPool { value: number; }
export interface CustomColors { [key: string]: string; }
export interface DiceResultProps { die: DieResult; isRolling: boolean; customColors: CustomColors; }

// Configuration for all available dice
export const DICE_CONFIG: DieConfig[] = [
    { type: 'd4', max: 4, defaultColor: 'bg-green-600', label: 'Green', hex: '#16A34A' },
    { type: 'd6', max: 6, defaultColor: 'bg-blue-600', label: 'Blue', hex: '#2563EB' },
    { type: 'd8', max: 8, defaultColor: 'bg-indigo-600', label: 'Indigo', hex: '#4F46E5' },
    { type: 'd10', max: 10, defaultColor: 'bg-purple-600', label: 'Purple', hex: '#9333EA' },
    { type: 'd12', max: 12, defaultColor: 'bg-pink-600', label: 'Pink', hex: '#DB2777' },
    { type: 'd20', max: 20, defaultColor: 'bg-red-600', label: 'Red', hex: '#DC2626' },
    { type: 'd100', max: 100, defaultColor: 'bg-yellow-500', label: 'Yellow', hex: '#F59E0B' },
];

export const DICE_COLORS_HEX: string[] = ["#FF5733", "#FF8C00", "#FFD700", "#00FF00", "#00FFFF", "#FF00FF", "#FF1493", "#FFFF00", "#FF4500", "#FF69B4", "#ADFF2F", "#E53935", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#03A9F4", "#00BCD4", "#009688", "#4CAF50"];