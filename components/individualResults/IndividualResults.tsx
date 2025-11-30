import { Box, Typography, Paper, Stack, useTheme} from '@mui/material';
import { DiceResult } from './DiceResult';

export default function IndividualResults({ results, isRolling }: { results: { id: number; type: string; value: number }[]; isRolling: boolean }) {
    const theme = useTheme();
    return (
        <>
            {results.length > 0 && (
                <Paper elevation={3} sx={{ width: '100%', maxWidth: 500, p: 3, borderRadius: '16px', backgroundColor: theme.palette.primary.light }}>
                    <Typography variant="h6" component="h2" fontWeight="700" color="text.secondary" mb={2}>Individual Results</Typography>
                    <Box sx={{ overflowX: 'auto', pb: 1 }}>
                        <Stack direction="row" spacing={2}>
                            {results.map((die, index) => (<DiceResult key={index} die={die} isRolling={isRolling} />))}
                        </Stack>
                    </Box>
                </Paper>
            )}
        </>
    );
}