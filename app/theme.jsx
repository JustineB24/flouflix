import { StyleSheet } from "react-native";

const colors = {
    primary: "#FF0000",
    secondary: "#00FF00",
    background: "#a3a3a3",
    text: "#000000",
    buttonValidate: "#00FF00",
    buttonCancel: "#FF0000",
    buttonText: "#FFFFFF",
    inputBackground: "#F0F0F0",
    inputBorder: "#CCCCCC",
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        textDecorationLine: "underline",
        fontWeight: "bold",
        color: colors.secondary,
        marginBottom: 16,
    },
    containerList: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: colors.background,
        padding: 16,
    },
    movieCard: {
        flex: 1,
        fontSize: 16,
    }
});

export { colors, styles };
