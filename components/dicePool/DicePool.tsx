
import { useCallback } from 'react';
import { Grid, Button, Typography, Paper, Stack, Box, useTheme } from '@mui/material';
import { type resultsDie, type diceDie, } from '../diceRollerContent/data';
import { Minus, } from 'lucide-react';
import DiceInPool from './DiceInPool';
import { getDieColor } from "../../utils/dice";

export default function DicePool({ dicePool, setDicePool, setResults }: { dicePool: diceDie[]; setDicePool: React.Dispatch<React.SetStateAction<diceDie[]>>; setResults: React.Dispatch<React.SetStateAction<resultsDie[]>>; }) {
    const theme = useTheme();
    // Clear the entire pool and results
    const clearPool = () => {
        setDicePool([]);
        setResults([]);
    };

    // Function to remove a die from the dice pool
    const removeFromPool = useCallback((id: number) => { setDicePool(prevPool => prevPool.filter(die => die.id !== id)); }, [setDicePool]);

    return (
        <Paper elevation={3} sx={{ width: '100%', maxWidth: 500, mb: 4, p: 3, borderRadius: '16px', backgroundColor: theme.palette.primary.light }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6" component="h2" fontWeight="700" color="text.secondary">Dice Pool ({dicePool.length})</Typography>
                <Button onClick={clearPool} disabled={dicePool.length === 0} startIcon={<Minus size={16} />} variant="outlined" size="small" color="secondary">Clear All</Button>
            </Stack>

            <Box sx={{ minHeight: 60, maxHeight: 160, overflowY: 'auto', p: 1, border: '1px solid #e0e0e0', borderRadius: '8px', }}>
                {dicePool.length > 0 ? (
                    <Grid container spacing={1}>
                        {dicePool.map(die => (<Grid size={{ xs: 6, sm: 4 }} key={die.id}> <DiceInPool die={die} removeFromPool={removeFromPool} /></Grid>))}
                    </Grid>
                ) : (<Typography variant="body2" color="text.disabled" align="center" py={1}>No dice added. Select a die type above!</Typography>)}
            </Box>
        </Paper>
    );
}