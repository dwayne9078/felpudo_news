import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/login";

import { MyBottomTabs } from './bottomtabs.navigator';

const Stack = createStackNavigator();

export function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerMode: true, gestureEnabled: false }}
      />
      <Stack.Screen
        name="home"
        component={MyBottomTabs}
        options={{ headerMode: true, gestureEnabled: false }}
      />
    </Stack.Navigator>
  );
}
