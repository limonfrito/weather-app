import React from "react-native";
import CurrentWeather from "./../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = (props) => {
  const { iconSize, focusedIconColor, unfocusedIconColor} = props;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
            backgroundColor: 'lightblue'
        },
        headerStyle: {
            backgroundColor: 'lightblue'
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
            color: 'tomato',
        }
      }}
    >
      <Tab.Screen
        name={"Current"}
        component={CurrentWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="droplet"
              size={focused ? 30 : iconSize}
              color={focused ? focusedIconColor : unfocusedIconColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Upcoming"}
        component={UpcomingWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"clock"}
              size={focused ? 30 : iconSize}
              color={focused ? focusedIconColor : unfocusedIconColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"City"}
        component={City}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"home"}
              size={ focused ? 30 : iconSize}
              color={focused ? focusedIconColor : unfocusedIconColor}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
