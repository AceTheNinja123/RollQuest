
import { useCallback } from 'react';
import { Grid, Button, Typography, Paper, useTheme} from '@mui/material';
import { type resultsDie, type diceDie, DICE_CONFIG } from '../diceRollerContent/data';

export default function SelectDice({ isMobile, setDicePool, setResults }: { isMobile: boolean; setDicePool: React.Dispatch<React.SetStateAction<diceDie[]>>; setResults: React.Dispatch<React.SetStateAction<resultsDie[]>>; }) {
    const theme = useTheme();
    // Function to add a die to the dice pool
    const addToPool = useCallback((type: string) => {
        setDicePool(prevPool => [...prevPool, { id: Date.now() + Math.random(), type }]);
        // Clear results/total when adding a new die
        setResults([]);
    }, [setDicePool, setResults]);
    return (
        <Paper elevation={3} sx={{ width: '100%', maxWidth: 500, mb: 4, p: 3, borderRadius: '16px', backgroundColor: theme.palette.primary.light }}>
            <Typography variant="h6" component="h2" fontWeight="700" color="text.secondary" mb={2}>Select Dice</Typography>
            <Grid container spacing={1.5}>
                {DICE_CONFIG.map((die) => (
                    <Grid size={{ xs: 3 }} key={die.type}>
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={() => addToPool(die.type)}
                            sx={{
                                backgroundColor: die.color + "!important",
                                '&:hover': { backgroundColor: die.color + "!important" },
                                fontWeight: 'bold',
                                fontSize: '1.1rem',
                                p: isMobile ? 1 : 2,
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.15s, box-shadow 0.15s',
                                '&:active': { transform: 'translateY(1px)' }
                            }}
                        >
                            {die.type.toUpperCase()}
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
}