import React from "react";
import {Text, View} from "react-native";
import {styles} from "./styles";
import {Avatar} from "../Avatar";

// type Props = {
//     children: "";
// }

export function Profile() {
    return (
       <View style={styles.container}>
           <Avatar urlImage="https://github.com/jrmessias.png" />
           <View>
           <View style={styles.user}>
               <Text style={styles.greeting}>
                   Olá,
               </Text>
               <Text style={styles.username}>
                   Júnior
               </Text>
           </View>
           <Text style={styles.message}>
               Hoje é dia de vitória.
           </Text>
           </View>
       </View>
    );
}