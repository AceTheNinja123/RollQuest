import React, { useCallback } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { DICE_CONFIG, DICE_COLORS_HEX, type CustomColors } from "../../constants/dice";
import { getDieColor } from "../../utils/dice";
import ColorDropdown from "./ColorDropdown";
import { styles } from "../../constants/StyleSheet";

interface CustomizerProps {
    isVisible: boolean;
    onClose: () => void;
    isDark: boolean;
    toggleColorMode: (isDark: boolean) => void;
    customColors: CustomColors;
    setCustomColors: React.Dispatch<React.SetStateAction<CustomColors>>;
}

const Customizer: React.FC<CustomizerProps> = ({ isVisible, onClose, isDark, toggleColorMode, customColors, setCustomColors }) => {
    const handleColorChange = useCallback((type: string, color: string) => { setCustomColors(prev => ({ ...prev, [type]: color })); }, [setCustomColors]);
    const revertColors = useCallback(() => { setCustomColors({}); }, [setCustomColors]);

    return (
        <Modal visible={isVisible} transparent animationType="fade">
            <View style={styles.overlay}>
                <View style={[styles.modalContainer, isDark ? styles.darkBg : styles.lightBg]}>
                    {/* Header */}
                    <View style={styles.headerRow}>
                        <Text style={[styles.costomizerHeaderTitle]}>Settings</Text>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Text style={[styles.closeIcon, isDark ? styles.textLight : styles.textDark]}>✕</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView style={styles.contentArea}>
                        {/* Theme Mode */}
                        <View>
                            <Text style={styles.sectionHeading}>Theme Mode</Text>
                            <View style={styles.row}>
                                <TouchableOpacity
                                    onPress={() => toggleColorMode(false)}
                                    style={[styles.themeOption, !isDark ? styles.themeActiveLight : styles.themeInactive]}
                                >
                                    <Text style={[styles.themeLabel, isDark ? styles.textLight : styles.textDark]}>Light</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => toggleColorMode(true)}
                                    style={[styles.themeOption, isDark ? styles.themeActiveDark : styles.themeInactive]}
                                >
                                    <Text style={[styles.themeLabel, isDark ? styles.textLight : styles.textDark]}>Dark</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Dice Color Settings */}
                        <View style={{ marginTop: 20 }}>
                            <View style={styles.costomizerRowBetween}>
                                <Text style={styles.sectionHeading}>Custom Dice Colors</Text>
                                <TouchableOpacity onPress={revertColors} style={styles.revertButton}>
                                    <Text style={styles.revertButtonText}>Revert</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={[styles.costomizerDiceGrid, isDark ? styles.diceCardDark : styles.diceCardLight]}>
                                {DICE_CONFIG.map((die) => (
                                    <View key={die.type} style={styles.diceItem}>
                                        <Text style={[styles.diceLabel, isDark ? styles.textLight : styles.textDark]}>{die.type.toUpperCase()} Color:</Text>
                                        <ColorDropdown
                                            value={getDieColor(die.type, customColors)}
                                            onChange={(value: string) => handleColorChange(die.type, value)}
                                            colors={DICE_COLORS_HEX}
                                            isDark={isDark}
                                        />
                                    </View>
                                ))}
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

export default Customizer;