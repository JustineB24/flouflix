import { colors } from "@/app/theme";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, Text } from "react-native";

const ReturnButton = () => {
    const [clicNumber, setClicNumber] = useState(0);

    return (
        <Pressable style={{ borderColor: colors.text, borderWidth: 1, padding: 30 }}>
            <Text onPress={() => {
                setClicNumber(clicNumber + 1);
                if (clicNumber >= 5) {
                    router.replace('/');
                }
            }}>
                Page du début avec les listes des films et les filtres et tout (Faut appuyer plusieurs fois)
            </Text>
        </Pressable>
    );
}

export default ReturnButton;
