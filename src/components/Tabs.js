import React from "react-native";
import CurrentWeather from "./../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = (props) => {
  const { iconSize, focusedIconColor, unfocusedIconColor, weather} = props;
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
      {/* Current weather tab */}
      <Tab.Screen
        name={"Current"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="droplet"
              size={focused ? 30 : iconSize}
              color={focused ? focusedIconColor : unfocusedIconColor}
            />
          ),
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      {/* Upcoming weather tab */}
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
      {/* City tab */}
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
