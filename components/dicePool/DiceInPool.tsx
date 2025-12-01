import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { getDieColor } from "../../utils/dice";
import { styles } from "../../constants/StyleSheet";

interface DiceInPoolProps {
    die: { id: number; type: string };
    removeFromPool: (id: number) => void;
    customColors?: any;
}

const DiceInPool: React.FC<DiceInPoolProps> = React.memo(({ die, removeFromPool, customColors }) => {
    const colorHex = getDieColor(die.type, customColors);

    return (
        <View style={[styles.diceInPoolContainer, { borderColor: colorHex, backgroundColor: colorHex + "20", },]}>
            <Text style={[styles.diceInPoolTypeText, { color: colorHex }]}>
                {die.type.toUpperCase()}
            </Text>

            <TouchableOpacity
                onPress={() => removeFromPool(die.id)}
                accessibilityLabel={`Remove ${die.type} from pool`}
                style={styles.diceInPoolRemoveButton}
            >
                <Text style={[styles.diceInPoolRemoveText, { color: colorHex }]}>×</Text>
            </TouchableOpacity>
        </View>
    );
}
);
export default DiceInPool;