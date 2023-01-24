import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Image
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Favorite = () => {
  const [favorites, setFavorites] = useState([])
  useEffect(() => {
    getData()
  }, [favorites])
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@favorite')
      return jsonValue != null ? setFavorites(JSON.parse(jsonValue)) : null;
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <SafeAreaView>
      <StatusBar />
      {
        favorites.length === 0 ? (
          <Text>No tienes un pokemon favorito</Text>
        ) : (
          <View>
            <Text>TU POKEMON FAVORITO ES:</Text>
            <Image
              width={160}
              height={160}
              source={{ uri: `${favorites.image}` }}
            />
            <Text>{favorites.name}</Text>
          </View>
        )
      }
    </SafeAreaView>
  )
}

export default Favorite