import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Image
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Styles from '../styles/CardStyles';

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
          <Text style={Styles.title}>No tienes un pokemon favorito</Text>
        ) : (
          <View >
            <Text style={Styles.title}>TU POKEMON FAVORITO ES:</Text>
            <View style={Styles.cardFavorite}>
              <Image
                width={360}
                height={360}
                source={{ uri: `${favorites.image}` }}
              />
              <Text style={Styles.name}>{favorites.name}</Text>

            </View>
          </View>
        )
      }
    </SafeAreaView>
  )
}

export default Favorite