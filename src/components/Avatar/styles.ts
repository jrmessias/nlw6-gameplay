import { StyleSheet } from "react-native";
import {theme} from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        borderRadius: theme.borderRadius,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 22,
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: theme.borderRadius
    }
});