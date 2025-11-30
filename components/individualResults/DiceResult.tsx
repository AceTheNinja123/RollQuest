import { Typography, Paper, } from '@mui/material';
import { styled } from '@mui/system';
import { DICE_CONFIG } from '../diceRollerContent/data';
// Styled Component for Dice Roll Animation
const DiceAnimation = styled('div')(({ isRolling }: { isRolling: boolean }) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    animation: isRolling ? 'spin-fast 0.1s linear infinite' : 'none',
    '@keyframes spin-fast': { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' }, },
}));

export const DiceResult = ({ die, isRolling }: { die: { id: number; type: string; value: number }; isRolling: boolean }) => {
    const dieConfig = DICE_CONFIG.find(d => d.type === die.type);
    const color = dieConfig?.color || '#9E9E9E'; // Default Grey

    return (
        <Paper
            elevation={4}
            sx={{
                p: 1,
                borderRadius: '12px',
                backgroundColor: color,
                color: 'white',
                fontWeight: 'bold',
                transition: 'all 0.3s',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: 60,
            }}
        >
            <DiceAnimation isRolling={isRolling} sx={{ width: 40, height: 40, fontSize: '1.2rem' }}>{die.value > 0 ? die.value : die.type.toUpperCase()}</DiceAnimation>
            <Typography variant="caption" sx={{ mt: 0.5, opacity: 0.8 }}>{die.type.toUpperCase()}</Typography>
        </Paper>
    );
};