import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screen/HomeScreen";
import TicketScreen from "../screen/TicketScreen";
import React from "react";
import Ionic from "react-native-vector-icons/Ionicons";
import LocationScreen from "../screen/LocationScreen";
import UserScreen from "../screen/UserScreen";
import { useTheme } from "../store/context/ThemeContext";
const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "transparent",
          borderTopEndRadius: 10,
          borderTopStartRadius: 10,
          position: "absolute",
          borderTopColor: "transparent",
          height: 80,
          overflow: "hidden",
        },
        tabBarIcon: ({ focused, colour }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home-sharp" : "home-outline";
            colour = focused && colors.selectedIcon;
          } else if (route.name === "MyTickets") {
            iconName = focused ? "film" : "film-outline";
            colour = focused && colors.selectedIcon;
          } else if (route.name === "Location") {
            iconName = focused ? "location" : "location-outline";
            colour = focused && colors.selectedIcon;
          } else if (route.name === "User") {
            iconName = focused ? "person" : "person-outline";
            colour = focused && colors.selectedIcon;
          }
          return (
            <>
              <Ionic
                name={iconName}
                style={{ top: 5 }}
                size={25}
                color={colour ? colour : colors.icon}
              />
              <Ionic
                name="remove-outline"
                style={{ display: colour ? "flex" : "none", left: 1 }}
                size={20}
                color={colour ? colour : "transparent"}
              />
            </>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Location"
        component={LocationScreen}
        options={{
          tabBarStyle: {
            backgroundColor: colors.background,
            borderTopEndRadius: 10,
            borderTopStartRadius: 10,
            position: "absolute",
            borderTopColor: "transparent",
            height: 80,
            overflow: "hidden",
          },
        }}
      />
      <Tab.Screen name="MyTickets" component={TicketScreen} />
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  );
};
export default BottomTabs;
