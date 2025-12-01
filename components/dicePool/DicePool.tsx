
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { type DieInPool, type CustomColors } from '../../constants/dice';
import { styles } from "../../constants/StyleSheet";
import DiceInPool from './DiceInPool';

export default function DicePool({ dicePool, isDark, customColors, clearPool, removeFromPool }: { dicePool: DieInPool[]; isDark: boolean; customColors: CustomColors; clearPool: () => void; removeFromPool: (id: number) => void; }) {

    return (
        <View style={[styles.card, isDark ? styles.cardDark : styles.cardLight]}>
            <View style={styles.rowBetween}>
                <Text style={styles.sectionTitle}>Dice Pool ({dicePool.length})</Text>
                <TouchableOpacity onPress={clearPool} disabled={dicePool.length === 0}>
                    <Text style={[styles.clearButton, dicePool.length === 0 && styles.disabled]}>Clear All</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={[styles.poolBox]} contentContainerStyle={{ paddingBottom: 20 }} nestedScrollEnabled={true}>
                {dicePool.length > 0 ? (
                    <View style={styles.poolList}>
                        {dicePool.map((die) => (
                            <DiceInPool key={die.id} die={die} removeFromPool={removeFromPool} customColors={customColors} />
                        ))}
                    </View>
                ) : (<Text style={styles.emptyMessage}>No dice added. Tap a die type above!</Text>)}
            </ScrollView>
        </View>
    );
}