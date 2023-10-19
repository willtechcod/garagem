import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from "../screens/Home";
import { Detail } from '../screens/Detail';
import { SignIn } from '../screens/SignIn';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
    return (
        <Navigator
           screenOptions={{ headerShown: false}}  
        >
            <Screen name='home' component={Home} />
            <Screen name='detail' component={Detail} />
            <Screen name='signin' component={SignIn} />
        </Navigator>
    )
}