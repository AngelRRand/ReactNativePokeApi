import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../View/Home';

const App = createNativeStackNavigator();

const HomeWrapper = () => {
    return (
        <App.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
            }}
        >

            <App.Screen name="Home" component={Home} />
        </App.Navigator>
    )
}

export default HomeWrapper