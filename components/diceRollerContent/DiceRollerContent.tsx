import { useState, useMemo, } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { type resultsDie, type diceDie, } from './data';
import DicePool from '../dicePool/DicePool';
import SelectDice from '../selectDice/SelectDice';
import Total from '../diceResult/DiceResult';
import IndividualResults from '../individualResults/IndividualResults';
import Header from '../customizer/Header';

// Main Application Component
export default function App() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [dicePool, setDicePool] = useState<diceDie[]>([]);
    const [results, setResults] = useState<resultsDie[]>([]);
    const [isRolling, setIsRolling] = useState<boolean>(false);
    // Calculate the total whenever results change (Derived State)
    const total = useMemo(() => { return results.reduce((sum, die) => sum + die.value, 0); }, [results]);
    return (
        <Box sx={{ minHeight: '100vh', p: isMobile ? 2 : 4, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
            {/* Header Component */}
            <Header />
            <Box pt={3} />
            {/* 1. Dice Selection Area */}
            <SelectDice isMobile={isMobile} setDicePool={setDicePool} setResults={setResults} />
            {/* 2. Dice Pool Area */}
            <DicePool dicePool={dicePool} setDicePool={setDicePool} setResults={setResults} />
            {/* 3. Roll Button and Total */}
            <Total total={total} isRolling={isRolling} dicePool={dicePool} setIsRolling={setIsRolling} setResults={setResults} />
            {/* 4. Results Display */}
            <IndividualResults results={results} isRolling={isRolling} />
        </Box>
    );
}