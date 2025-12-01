import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    /* MAIN APP */
    appContainer: { flex: 1, padding: 10, paddingTop: 30, },

    lightBg: { backgroundColor: "#f3f4f6" },
    darkBg: { backgroundColor: "#111827" },

    /* HEADER */
    header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20, marginTop: 10, },
    headerTitle: { fontSize: 32, fontWeight: "800", color: "#4f46e5", },
    headerSubtitle: { fontSize: 12, color: "#9ca3af", },

    settingsButton: { padding: 10, borderRadius: 30, },
    settingsIcon: { fontSize: 26, },
    settingsLight: { backgroundColor: "#e5e7eb" },
    settingsDark: { backgroundColor: "#374151" },

    /* MAIN CONTENT LAYOUT */
    mainContent: { paddingBottom: 90, },

    /* CARD */
    card: { borderRadius: 20, padding: 20, marginBottom: 20, },
    cardLight: { backgroundColor: "#ffffff", shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 6, },
    cardDark: { backgroundColor: "#1f2937", shadowColor: "#000", shadowOpacity: 0.3, shadowRadius: 10, },

    /* SECTION TITLES */
    sectionTitle: { fontSize: 20, fontWeight: "700", marginBottom: 12, color: "#4f46e5", },

    /* DICE SELECT GRID */
    diceGrid: { flexDirection: "row", flexWrap: "wrap", },
    diceSelectButton: {
        paddingVertical: 14,
        paddingHorizontal: 10,
        borderRadius: 10,
        minWidth: 60,
        height: 50,            // Add this
        justifyContent: "center",
        alignItems: "center",
        margin: 6,
    },
    diceSelectLabel: { color: "white", fontWeight: "700", },

    /* POOL AREA */
    poolBox: { borderWidth: 2, borderRadius: 14, padding: 12, maxHeight: 160, borderColor: "#4b5563", },
    poolList: { flexDirection: "row", flexWrap: "wrap", gap: 8, },
    emptyMessage: { textAlign: "center", color: "#9ca3af", fontStyle: "italic", paddingVertical: 14, },
    clearButton: { color: "#db2777", fontWeight: "600", fontSize: 14, },
    disabled: { opacity: 0.4, },

    /* ROLL BUTTON CARD */
    rollCard: {
        borderTopWidth: 4,
        borderTopColor: "#4f46e5",
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    totalLabel: { fontSize: 16, color: "#6b7280", },
    totalValue: { fontSize: 54, fontWeight: "800", color: "#4f46e5", marginTop: -6, },

    /* ROLL BUTTON */
    rollButton: { width: 140, height: 60, borderRadius: 40, justifyContent: "center", alignItems: "center", },
    rollButtonText: { color: "white", fontSize: 22, fontWeight: "800", },
    rollButtonActive: { backgroundColor: "#4f46e5", },
    rollButtonDisabled: { backgroundColor: "#6b7280", },

    /* UTILITY */
    rowBetween: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", },
    /* 🔹 Modal Layout */
    overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.7)", justifyContent: "center", alignItems: "center", },

    modalContainer: { width: "90%", borderRadius: 16, padding: 20, maxHeight: "85%", },

    /* 🔹 Header */
    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "rgba(255,255,255,0.1)",
        paddingBottom: 10,
        marginBottom: 15,
    },

    costomizerHeaderTitle: { fontSize: 26, fontWeight: "bold", color: "#6366f1", },

    closeButton: { padding: 6, },
    closeIcon: { fontSize: 24, },

    /* 🔹 Content Area */
    contentArea: { width: "100%", },

    /* 🔹 Theme Section */
    sectionHeading: { fontSize: 20, marginBottom: 10, fontWeight: "bold", color: "#6366f1", },

    row: { flexDirection: "row", alignItems: "center", },

    costomizerRowBetween: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", },

    themeOption: { flex: 1, padding: 14, borderRadius: 12, borderWidth: 2, marginHorizontal: 4, alignItems: "center", },
    themeActiveLight: { backgroundColor: "#eef2ff", borderColor: "#6366f1", },
    themeActiveDark: { backgroundColor: "#312e81", borderColor: "#6366f1", },
    themeInactive: { borderColor: "#6b7280", },
    themeLabel: { fontSize: 16, fontWeight: "600", },

    /* 🔹 Dice Grid */
    costomizerDiceGrid: { borderRadius: 12, padding: 14, marginTop: 10, },
    diceCardLight: { backgroundColor: "#f9fafb", },
    diceCardDark: { backgroundColor: "#111827", },
    diceItem: { marginBottom: 16, },
    diceLabel: { fontSize: 15, fontWeight: "500", marginBottom: 6, },

    colorPreview: { width: 28, height: 28, marginRight: 10, borderWidth: 2, borderColor: "#fff", },
    picker: { width: "90%", color: "#000", },

    /* 🔹 Buttons */
    revertButton: { backgroundColor: "#db2777", paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8, },
    revertButtonText: { color: "white", fontWeight: "600", },

    /* 🔹 Text Colors */
    textDark: { color: "#111" },
    textLight: { color: "#f3f4f6" },

    /* Dice Result */
    diceResult: { borderWidth: 2, borderRadius: 14, padding: 5, maxHeight: 200, borderColor: "#4b5563" },
    diceResultInner: { flexDirection: "row", flexWrap: "wrap", gap: 10, },
    DiceResultContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "28%",
        height: 60,
        padding: 8,
        margin: 2,
        borderWidth: 2,
        borderRadius: 12,
    },
    DiceResultMainText: { color: "#fff", fontWeight: "800", fontSize: 20, },
    DiceResultSubText: { color: "white", fontSize: 15, opacity: 0.8, marginTop: 4, },

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
    diceInPoolTypeText: { fontWeight: "600", fontSize: 14, },
    diceInPoolRemoveButton: { marginLeft: 8, paddingHorizontal: 4, },
    diceInPoolRemoveText: { fontSize: 14, fontWeight: "700", },
});
