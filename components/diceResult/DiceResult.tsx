import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {DieConfig, DieInPool, DieResult, CustomColors, DiceResultProps, DICE_CONFIG, DICE_COLORS_HEX} from "../../constants/dice";
import {rollSingleDie, getDieColor, generateDiceId} from "../../utils/dice";

const DiceResult: React.FC<DiceResultProps> = React.memo(({ die, isRolling, customColors }) => {
    const colorHex = getDieColor(die.type, customColors);
    const displayValue = die.value === 0 && die.type === 'd100' ? '00' : die.value;
    const dieConfig = DICE_CONFIG.find(c => c.type === die.type);

    // Simple animation simulation via conditional text
    const animationText = isRolling ? (dieConfig ? rollSingleDie(die.type, dieConfig.max) : '?') : displayValue;

    return (
        <View style={[styles.DiceResultContainer, { backgroundColor: colorHex }]}>
            <Text style={styles.DiceResultMainText}>{animationText}</Text>
            <Text style={styles.DiceResultSubText}>{die.type.toUpperCase()}</Text>
        </View>
    );
});
export default DiceResult;
const styles = StyleSheet.create({
  DiceResultContainer: {
    margin: 8,
    padding: 16,
    minWidth: 70,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5, // Android shadow
  },
  DiceResultMainText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 20,
  },
  DiceResultSubText: {
    color: "white",
    fontSize: 10,
    opacity: 0.8,
    marginTop: 4,
  },
});