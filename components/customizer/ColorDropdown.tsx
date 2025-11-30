import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, FlatList } from "react-native";
import { styles } from "../../constants/StyleSheet";

export default function ColorDropdown({ value, onChange, colors, isDark }: { value: string; onChange: (value: string) => void; colors: string[], isDark: boolean }) {
    const [open, setOpen] = useState(false);

    return (
        <View>
            {/* Selected value */}
            <TouchableOpacity
                onPress={() => setOpen(true)}
                style={{
                    width: "100%",
                    padding: 10,
                    borderWidth: 1,
                    borderRadius: 8,
                    borderColor: "#ccc",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10
                }}
            >
                <View style={{ width: 20, height: 20, borderRadius: 4, backgroundColor: value }} />
                <Text style={[isDark ? styles.textLight : styles.textDark]}>{value}</Text>
            </TouchableOpacity>

            {/* Modal dropdown */}
            <Modal transparent visible={open} animationType="fade">
                <TouchableOpacity
                    style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.4)", justifyContent: "center", alignItems: "center", }}
                    onPress={() => setOpen(false)}
                >
                    <View style={{ width: "70%", height: "70%", backgroundColor: "white", borderRadius: 10, padding: 10, }}>
                        <FlatList
                            data={colors}
                            keyExtractor={(c) => c}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => { onChange(item); setOpen(false); }}
                                    style={{ flexDirection: "row", alignItems: "center", padding: 10, gap: 10, }}
                                >
                                    <View
                                        style={{
                                            width: 20,
                                            height: 20,
                                            borderRadius: 4,
                                            backgroundColor: item,
                                        }}
                                    />
                                    <Text>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
}
