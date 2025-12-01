
import { useCallback } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { type CustomColors, DICE_CONFIG } from '../../constants/dice';
import { styles } from "../../constants/StyleSheet";
import { getDieColor } from '../../utils/dice';
export default function SelectDice({ isDark,customColors, addToPool }: { isDark: boolean; customColors: CustomColors; addToPool: (type: string) => void; }) {
    return (
        <View style={[styles.card, isDark ? styles.cardDark : styles.cardLight]}>
            <Text style={styles.sectionTitle}>Select Dice</Text>
            <View style={styles.diceGrid}>
                {DICE_CONFIG.map((die) => (
                    <TouchableOpacity
                        key={die.type}
                        onPress={() => addToPool(die.type)}
                        style={[styles.diceSelectButton, { backgroundColor: getDieColor(die.type, customColors) }]}
                    >
                        <Text style={styles.diceSelectLabel}>{die.type.toUpperCase()}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}