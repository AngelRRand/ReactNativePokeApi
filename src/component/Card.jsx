import { View, Text } from 'react-native'
import React from 'react'

const Card = ({ item }) => {
    //console.log(item)
    return (
        <View>
            <Text>{item?.name}</Text>
        </View>
    )
}

export default Card