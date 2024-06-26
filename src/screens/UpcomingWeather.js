import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import ListItem from '../components/ListItem';


const UpcomingWeather = ( {weatherData} ) => {

  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt={item.dt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  const { container, image } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("./../../assets/upcoming-background.jpg")}
        style={image}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    //marginTop: 0 || StatusBar.currentHeight,
    backgroundColor: "royalblue",
  },
  image: {
    flex: 1
  },
});

export default UpcomingWeather;
