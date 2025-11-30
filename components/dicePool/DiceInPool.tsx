import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { getDieColor } from "../../utils/dice";

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

const styles = StyleSheet.create({
    // --- Container wrapping the die ---
    diceInPoolContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 8,
        margin: 4,
        borderWidth: 2,
        borderRadius: 12,
    },

    // --- The die type text (e.g., D6, D10) ---
    diceInPoolTypeText: {
        fontWeight: "600",
        fontSize: 14,
    },

    // --- Wrapper for the remove button ---
    diceInPoolRemoveButton: {
        marginLeft: 8,
        paddingHorizontal: 4,
    },

    // --- The "×" text ---
    diceInPoolRemoveText: {
        fontSize: 14,
        fontWeight: "700",
    },
});
