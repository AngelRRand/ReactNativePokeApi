import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favorite from '../View/Favorite';

const App = createNativeStackNavigator();

const FavoriteWrapper = () => {
    return (
        <App.Navigator
            initialRouteName='Favorite'
            screenOptions={{
                headerShown: false,
            }}
        >
            <App.Screen name="Favorite" component={Favorite} />
        </App.Navigator>
    )
}

export default FavoriteWrapper