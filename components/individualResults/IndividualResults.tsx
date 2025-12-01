import { Text, View, ScrollView } from 'react-native';
import { type CustomColors, } from '../../constants/dice';
import { styles } from "../../constants/StyleSheet";
import DiceResult from './DiceResult';

export default function IndividualResults({ results, isRolling, isDark, customColors }: { results: { id: number; type: string; value: number }[]; isRolling: boolean; isDark: boolean; customColors: CustomColors }) {
    return (
        <>
            {results.length > 0 && (
                <View style={[styles.card, isDark ? styles.cardDark : styles.cardLight]}>
                    <Text style={styles.sectionTitle}>Individual Results</Text>
                    <ScrollView style={[styles.diceResult]}>
                        <View style={styles.poolList}>
                            {results.map((die, idx) => (
                                <DiceResult key={idx} die={die} isRolling={isRolling} customColors={customColors} />
                            ))}
                        </View>
                    </ScrollView>
                </View>
            )}
        </>
    );
}