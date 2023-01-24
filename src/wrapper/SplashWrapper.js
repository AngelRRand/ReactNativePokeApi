import Splash from '../View/Splash';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = createNativeStackNavigator();

const SplashWrapper = () => {
    return (
        <App.Navigator
            initialRouteName='Splash'
            screenOptions={{
                headerShown: false,
            }}
        >

            <App.Screen name="Splash" component={Splash} />
        </App.Navigator>
    )
}

export default SplashWrapper