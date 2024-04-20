import React, { useEffect, useState } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";
import { useGetWeather } from './src/hooks/useGetWeather';

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  const [loading, error, weather] = useGetWeather();
  console.log(loading, error, weather);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={"red"} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tabs
        iconSize={25}
        focusedIconColor={"tomato"}
        unfocusedIconColor={"black"}
      />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
});

export default App;
