import * as React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { DataProvider, useData } from "./context/DataContext";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

export default function App() {
  const [name, setName] = React.useState(null);

  return (
    <NavigationContainer>
      <DataProvider>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home-outline" : "home-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "settings-outline" : "settings-outline";
              } else if (route.name === "Profile") {
                iconName = focused
                  ? "person-circle-outline"
                  : "person-circle-outline";
              } else {
                iconName = focused
                  ? "notifications-outline"
                  : "notifications-outline";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "grey",
          })}
        >
          <Tab.Screen
            name="Home"
            children={() => <HomeScreen setName={setName} />}
          />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen
            name="Notification"
            component={NotificationsScreen}
            options={{ tabBarBadge: name != null ? 1 : null }}
          />
        </Tab.Navigator>
      </DataProvider>
    </NavigationContainer>
  );
}
