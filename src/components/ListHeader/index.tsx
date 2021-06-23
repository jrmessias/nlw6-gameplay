import React from "react";
import {Text, View} from "react-native";
import {RectButton, RectButtonProps} from "react-native-gesture-handler";
import {SvgProps} from "react-native-svg";
import {LinearGradient} from "expo-linear-gradient";
import {theme} from "../../global/styles/theme";
import {styles} from "./styles";

type Props = RectButtonProps & {
    title: string,
    icon: React.FC<SvgProps>,
    checked?: boolean;
}

export function ListHeader({title, icon: Icon, checked = false, ...rest}: Props) {
    const {secondary50, secondary70} = theme.colors;

    return (
        <View></View>
    );
}