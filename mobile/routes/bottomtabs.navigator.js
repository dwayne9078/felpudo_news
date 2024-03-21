import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "../screens/home";
import TrendingScreen from "../screens/trending";
import BookmarkScreen from "../screens/bookmark";
import ProfileScreen from "../screens/profile";

const BottomTab = createBottomTabNavigator();

export function MyBottomTabs() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#B80000",
        tabBarStyle: {
          backgroundColor: "#00164B",
          height: 100,
          borderWidth: 0,
        },
        tabBarLabelStyle: { fontSize: 16, fontWeight: "bold" },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Trending"
        component={TrendingScreen}
        options={{
          tabBarLabel: "Tendencia",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="trending-up"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{
          tabBarLabel: "Guardados",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bookmark-multiple"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Mi Perfil",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
