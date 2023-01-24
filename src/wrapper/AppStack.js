import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppWrapper from './AppWrapper';
import SplashWrapper from './SplashWrapper';

const Tap = createBottomTabNavigator();
const App = createNativeStackNavigator();

const AppStack = () => {
    return (
        <App.Navigator
            initialRouteName='SplashWrapper'
            screenOptions={{
                headerShown: false,
            }}
        >
            <App.Screen name="SplashWrapper" component={SplashWrapper} />
            <App.Screen name="AppWrapper" component={AppWrapper} />

        </App.Navigator>
    )
}

export default AppStack