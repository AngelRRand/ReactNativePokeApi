import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react-native';
import Styles from '../styles/SplashStyles';
import { useNavigation } from '@react-navigation/native';
const Splash = () => {

    const navigation = useNavigation()
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setTimeout(()=>{
            setLoaded(true)
        }, 4000)
    }, [])

    useEffect(() => {
        if(loaded){
            navigation.navigate('AppWrapper')
        }
    }, [loaded])
    
    return (
        <View style={Styles.root}>
            <Lottie source={require('../assets/data.json')} autoPlay loop />
        </View>
    )
}

export default Splash