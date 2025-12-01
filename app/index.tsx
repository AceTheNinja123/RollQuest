import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { DieInPool, DieResult, CustomColors, DICE_CONFIG } from "../constants/dice";
import { styles } from "../constants/StyleSheet";
import { rollSingleDie, generateDiceId } from "../utils/dice";
import Customizer from "../components/customizer/Customizer";
import DicePool from "../components/dicePool/DicePool";
import SelectDice from "../components/selectDice/SelectDice";
import DiceResultRollor from "../components/diceResultRollor/DiceResultRollor";
import IndividualResults from "../components/individualResults/IndividualResults";
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
        <View style={[styles.appContainer, isDark ? styles.darkBg : styles.lightBg]}>

            {/* HEADER */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.headerTitle}>D&D Roller</Text>
                    <Text style={styles.headerSubtitle}>Assemble your dice pool and roll!</Text>
                </View>
                <TouchableOpacity onPress={() => setIsSettingsOpen(true)} style={[styles.settingsButton, isDark ? styles.settingsDark : styles.settingsLight]}>
                    <Text style={styles.settingsIcon}>⚙️</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.mainContent}>
                {/* DICE SELECTOR */}
                <SelectDice isDark={isDark} customColors={customColors} addToPool={addToPool} />
                {/* DICE POOL */}
                <DicePool dicePool={dicePool} isDark={isDark} customColors={customColors} clearPool={clearPool} removeFromPool={removeFromPool} />
                {/* ROLL BUTTON */}
                <DiceResultRollor total={total} rollDice={rollDice} dicePool={dicePool} isRolling={isRolling} isDark={isDark} customColors={customColors} />
                {/* RESULTS */}
                <IndividualResults results={results} isRolling={isRolling} isDark={isDark} customColors={customColors} />
            </ScrollView>

            {/* SETTINGS MODAL */}
            <Customizer isVisible={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} isDark={isDark} toggleColorMode={setIsDark} customColors={customColors} setCustomColors={setCustomColors} />
        </View>
    );
};

export default Home;