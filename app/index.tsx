import React, { useState, useEffect, useCallback, useMemo } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { DieConfig, DieInPool, DieResult, CustomColors, DICE_CONFIG } from "../constants/dice";
import { styles } from "../constants/StyleSheet";
import { rollSingleDie, getDieColor, generateDiceId } from "../utils/dice";
import Customizer from "../components/customizer/Customizer";
import DiceInPool from "../components/dicePool/DiceInPool";
import DiceResult from "../components/diceResult/DiceResult";
const Home: React.FC = () => {
    const [isDark, setIsDark] = useState<boolean>(false);
    const [customColors, setCustomColors] = useState<CustomColors>({});
    const [dicePool, setDicePool] = useState<DieInPool[]>([]);
    const [results, setResults] = useState<DieResult[]>([]);
    const [isRolling, setIsRolling] = useState<boolean>(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
    const total = useMemo(() => results.reduce((sum, die) => sum + die.value, 0), [results]);

    const addToPool = useCallback((type: string) => {
        setDicePool(prev => [...prev, { id: generateDiceId(), type }]);
        setResults([]);
    }, []);

    const removeFromPool = useCallback((id: number) => { setDicePool(prev => prev.filter(die => die.id !== id)); }, []);

    const clearPool = () => {
        setDicePool([]);
        setResults([]);
    };

    const rollDice = async () => {
        if (dicePool.length === 0 || isRolling) return;

        setIsRolling(true);
        setResults(dicePool.map(die => ({ ...die, value: 0 })));

        let frame = 0;
        const duration = 600;

        const interval = setInterval(() => {
            frame++;

            // when done
            if (frame * 100 >= duration) {
                clearInterval(interval);

                const finalResults = dicePool.map((die) => {
                    const config = DICE_CONFIG.find(c => c.type === die.type);
                    if (!config) return { ...die, value: 0 };
                    return { ...die, value: rollSingleDie(die.type, config.max) };
                });

                setResults(finalResults);
                setIsRolling(false);
                return;
            }

            // animation frame
            const animated = dicePool.map((die) => {
                const config = DICE_CONFIG.find(c => c.type === die.type);
                return { ...die, value: rollSingleDie(die.type, config?.max ?? 0) };
            });

            setResults(animated);

        }, 100);
    };

    return (
        <View
            style={[
                styles.appContainer,
                isDark ? styles.darkBg : styles.lightBg
            ]}
        >

            {/* HEADER */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.headerTitle}>D&D Roller</Text>
                    <Text style={styles.headerSubtitle}>Assemble your dice pool and roll!</Text>
                </View>

                <TouchableOpacity
                    onPress={() => setIsSettingsOpen(true)}
                    style={[styles.settingsButton, isDark ? styles.settingsDark : styles.settingsLight]}
                >
                    <Text style={styles.settingsIcon}>⚙️</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.mainContent}>

                {/* DICE SELECTOR */}
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

                {/* DICE POOL */}
                <View style={[styles.card, isDark ? styles.cardDark : styles.cardLight]}>
                    <View style={styles.rowBetween}>
                        <Text style={styles.sectionTitle}>Dice Pool ({dicePool.length})</Text>

                        <TouchableOpacity onPress={clearPool} disabled={dicePool.length === 0}>
                            <Text style={[styles.clearButton, dicePool.length === 0 && styles.disabled]}>Clear All</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView style={[styles.poolBox]}>
                        {dicePool.length > 0 ? (
                            <View style={styles.poolList}>
                                {dicePool.map((die) => (
                                    <DiceInPool
                                        key={die.id}
                                        die={die}
                                        removeFromPool={removeFromPool}
                                        customColors={customColors}
                                    />
                                ))}
                            </View>
                        ) : (<Text style={styles.emptyMessage}>No dice added. Tap a die type above!</Text>)}
                    </ScrollView>
                </View>

                {/* ROLL BUTTON */}
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

                {/* RESULTS */}
                {results.length > 0 && (
                    <View style={[styles.card, isDark ? styles.cardDark : styles.cardLight]}>
                        <Text style={styles.sectionTitle}>Individual Results</Text>
                        <ScrollView horizontal>
                            <View style={styles.poolList}>
                                {results.map((die, idx) => (
                                    <DiceResult key={idx} die={die} isRolling={isRolling} customColors={customColors} />
                                ))}
                            </View>
                        </ScrollView>
                    </View>
                )}

            </ScrollView>

            {/* SETTINGS MODAL */}
            <Customizer
                isVisible={isSettingsOpen}
                onClose={() => setIsSettingsOpen(false)}
                isDark={isDark}
                toggleColorMode={setIsDark}
                customColors={customColors}
                setCustomColors={setCustomColors}
            />
        </View>
    );
};

export default Home;