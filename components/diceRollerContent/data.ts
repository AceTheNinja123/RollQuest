export interface resultsDie {
    id: number;
    type: string;
    value: number;
}
export interface diceDie {
    id: number;
    type: string;
}
// Configuration for all available dice
export const DICE_CONFIG = [
    { type: 'd4', max: 4, color: '#4CAF50', bgColor: 'success', }, 
    { type: 'd6', max: 6, color: '#2196F3', bgColor: 'primary' }, 
    { type: 'd8', max: 8, color: '#3F51B5', bgColor: 'indigo' }, 
    { type: 'd10', max: 10, color: '#9C27B0', bgColor: 'secondary' }, 
    { type: 'd12', max: 12, color: '#E91E63', bgColor: 'error' },
    { type: 'd20', max: 20, color: '#F44336', bgColor: 'red' },
    { type: 'd100', max: 100, color: '#FFEB3B', bgColor: 'warning' },
];