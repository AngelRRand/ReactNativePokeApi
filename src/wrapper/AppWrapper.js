import Home from '../View/Home';
import Favorite from '../View/Favorite';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import logoHome from "../assets/icons/Home.png";
import logoFavorite from "../assets/icons/Heart.png";
import Styles from '../styles/AppStyles';
import { Image } from 'react-native';
import FavoriteWrapper from './FavoriteWrapper';
import HomeWrapper from './HomeWrapper';

const Tap = createBottomTabNavigator();

const AppWrapper = () => {
    return (
        <Tap.Navigator
            initialRouteName='HomeWrapper'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tap.Screen
                name="HomeWrapper"
                component={HomeWrapper}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Image
                                style={Styles.logo}
                                source={logoHome}
                            />
                        ) : (
                            <Image
                                style={Styles.logo}
                                source={logoHome} />
                        ),
                }}
            />
            <Tap.Screen
                name="FavoriteWrapper"
                
                component={FavoriteWrapper}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Image
                                style={Styles.logo}
                                source={logoFavorite}
                            />
                        ) : (
                            <Image
                                style={Styles.logo}
                                source={logoFavorite} />
                        ),
                }}
            />
        </Tap.Navigator>
    )
}

export default AppWrapper