import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Styles from '../styles/CardStyles'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Card = ({ item }) => {
    //console.log(item.image)
    const selectPokemon = () => {
        try {
            AsyncStorage.setItem('@favorite', JSON.stringify(item));
            alert(`Ahora ${item.name} es tu pokemon favorito :D` )
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Pressable onPress={()=> selectPokemon()}>
            <View style={Styles.card}>
                <Image
                    width={80}
                    height={80}
                    source={{ uri: `${item?.image}` }} />
                <Text>{item?.name}</Text>
            </View>
        </Pressable>
    )
}

export default Card