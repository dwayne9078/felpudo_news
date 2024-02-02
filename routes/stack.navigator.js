import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
import Login from "../screens/login";
import HomeScreen from "../screens/home";

export function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerMode: false }}
      />
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{ headerMode: false }}
      />
    </Stack.Navigator>
  );
}
