import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/login";

import { MyBottomTabs } from "./bottomtabs.navigator";
import { Register } from "../screens/register";

const Stack = createStackNavigator();

export function StackNav() {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerMode: true, gestureEnabled: false }}
      />
      <Stack.Screen
        name="register"
        component={Register}
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
