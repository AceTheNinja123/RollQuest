import { useCallback } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { type CustomColors, type DieInPool} from '../../constants/dice';
import { styles } from "../../constants/StyleSheet";

export default function IndividualResults({ total, rollDice, dicePool, isRolling, isDark, customColors }: { total: number; rollDice: () => void; dicePool: DieInPool[]; isRolling: boolean; isDark: boolean; customColors: CustomColors }) {
    return (
        <View style={[styles.rollCard, isDark ? styles.cardDark : styles.cardLight]}>
            <View>
                <Text style={styles.totalLabel}>Total:</Text>
                <Text style={styles.totalValue}>{total}</Text>
            </View>
            <TouchableOpacity
                onPress={rollDice}
                disabled={dicePool.length === 0 || isRolling}
                style={[styles.rollButton, (dicePool.length === 0 || isRolling) ? styles.rollButtonDisabled : styles.rollButtonActive]}
            >
                <Text style={styles.rollButtonText}>{isRolling ? "Rolling..." : "ROLL"}</Text>
            </TouchableOpacity>
        </View>
    );
}