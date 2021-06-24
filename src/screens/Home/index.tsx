import React, {useState} from "react";
import {FlatList, View} from "react-native";
import {styles} from "./styles"
import {Profile} from "../../components/Profile";
import {ButtonAdd} from "../../components/ButtonAdd";
import {CategorySelect} from "../../components/CategorySelect";
import {ListHeader} from "../../components/ListHeader";
import {Appointment} from "../../components/Appointment";
import {ListDivider} from "../../components/ListDivider";
import {Background} from "../../components/Background";

export function Home() {
    const [category, setCategory] = useState('');

    const appointments = [
        {
            id: "1", guild: {
                id: "1",
                name: "Lendários",
                icon: null,
                owner: true
            },
            category: "1",
            date: "22/06 às 20:40h",
            description: "É hoje que vamos chegar ao challenger sem perder uma partida da m20vvvvv",
        },
        {
            id: "2", guild: {
                id: "1",
                name: "Lendários",
                icon: null,
                owner: false
            },
            category: "1",
            date: "22/06 às 20:40h",
            description: "É hoje que vamos chegar ao challenger sem perder uma partida da m20vvvvv",
        },
        {
            id: "3", guild: {
                id: "1",
                name: "Lendários",
                icon: null,
                owner: false
            },
            category: "1",
            date: "22/06 às 20:40h",
            description: "É hoje que vamos chegar ao challenger sem perder uma partida da m20vvvvv",
        }
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    return (
        <Background>
            <View style={styles.header}>
                <Profile/>
                <ButtonAdd/>
            </View>
            <CategorySelect categorySelected={category} setCategory={handleCategorySelect}/>
            <View style={styles.content}>
                <ListHeader title="Partidas agendadas" subtitle="Total 6"/>
                <FlatList data={appointments} keyExtractor={item => item.id}
                          renderItem={({item}) => (
                              <Appointment data={item}/>
                          )}
                          style={styles.matches}
                          ItemSeparatorComponent={() => <ListDivider/>}
                          showsVerticalScrollIndicator={false}>

                </FlatList>
            </View>
        </Background>
    );
}