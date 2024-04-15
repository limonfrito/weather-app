import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from "react-native";
import IconText from "./IconText";

const City = () => {
  const {
    container,
    imageLayout,
    cityName,
    countryName,
    cityText,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout
  } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("./../../assets/city-background.jpg")}
        style={imageLayout}
      >
        <Text style={[cityText, cityName]}>Guadalajara</Text>
        <Text style={[cityText, countryName]}>Mexico</Text>

        <View style={[populationWrapper, rowLayout]}>
          <IconText iconName={'user'} iconColor={'red'} bodyText={'4,000,000'} bodyTextStyles={populationText} />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText iconName={'sunrise'} iconColor={'white'} bodyText={'06:10:58am'} bodyTextStyles={riseSetText} />
          <IconText iconName={'sunset'} iconColor={'white'} bodyText={'07:20:35pm'} bodyTextStyles={riseSetText} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
  },
  populationWrapper: {
    alignItems: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
    fontWeight: "bold",
  },
  riseSetWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  },
  rowLayout: {

  }
});

export default City;
