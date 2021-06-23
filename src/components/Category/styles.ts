import { StyleSheet } from "react-native";
import {theme} from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: 104,
        height: 120,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: theme.borderRadius,
        marginRight: 8,
    },
    content: {
        width: 100,
        height: 116,
        backgroundColor: theme.colors.secondary40,
        borderRadius: theme.borderRadius,
        justifyContent: "space-between",
        alignItems: "center"
    },
    title:{
        fontFamily: theme.fonts.title500,
        color: theme.colors.heading,
        fontSize: 15
    },
    check: {
        width: 12,
        height: 12,
        backgroundColor: theme.colors.secondary100,
        alignSelf: "flex-end",
        borderColor: theme.colors.secondary50,
        borderRadius: theme.borderRadius,
        marginTop: 5,
        marginRight: 5
    },
    checked: {
        width: 12,
        height: 12,
        backgroundColor: theme.colors.primary,
        alignSelf: "flex-end",
        borderRadius: theme.borderRadius,
        marginTop: 5,
        marginRight: 5
    }

});