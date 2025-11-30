import {DieConfig, DieInPool, DieResult, CustomColors, DiceResultProps, DICE_CONFIG, DICE_COLORS_HEX} from '../constants/dice';

// --- HELPER FUNCTIONS ---
export const rollSingleDie = (type: string, max: number): number => {
    if (type === 'd100') { return Math.floor(Math.random() * 10) * 10; }
    return Math.floor(Math.random() * max) + 1;
};

export const getDieColor = (type: string, customColors: CustomColors): string => {
    const config = DICE_CONFIG.find(d => d.type === type);
    // customColors is an object (map), not an array. We access it by key (type).
    return customColors[type] || config?.hex || '#6B7280'; // Default to a grey color if not found
};

// Utility function to generate a unique ID for dice in the pool
export const generateDiceId = (): number => Date.now() + Math.random();
