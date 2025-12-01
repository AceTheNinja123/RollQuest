import React from 'react';
import { Text, View } from 'react-native';
import { DiceResultProps, DICE_CONFIG } from '../../constants/dice';
import { rollSingleDie, getDieColor } from '../../utils/dice';
import { styles } from "../../constants/StyleSheet";

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