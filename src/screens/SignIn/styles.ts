import {StyleSheet} from "react-native";
import {theme} from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        alignItems: "flex-start",
        width: "100%",
        height: 360
    },
    content: {
        marginTop: -60,
        paddingHorizontal: 50
    },
    title: {
        textAlign: "center",
        color: theme.colors.heading,
        fontSize: 35 ,
        marginBottom: 8,
        fontFamily: theme.fonts.title700
    },
    subtitle: {
        textAlign: "center",
        color: theme.colors.heading,
        fontSize: 15,
        marginBottom: 20,
        fontFamily: theme.fonts.title500
    }
});