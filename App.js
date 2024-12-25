import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import hotBackground from "./assets/hot.png";
import { Input } from "./components/Input/Input";
import { useState } from "react";
import { DisplayTemperature } from "./components/displayTemperature/DisplayTemperature";
import {
  UNITS,
  convertTemperatureTo,
  getOppositeUnit,
} from "./utils/temperature";

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [unit, setUnit] = useState("°C");
  const oppositeUnit = getOppositeUnit(unit);

  function getConvertedTemperature() {
    if (isNaN(inputValue)) return "";
    else return convertTemperatureTo(inputValue, oppositeUnit).toFixed(1);
  }
  return (
    <ImageBackground style={s.backgroundImage} source={hotBackground}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workSpace}>
            <DisplayTemperature
              unit={oppositeUnit}
              temperature={getConvertedTemperature()}
            />
            <Input unit={unit} onChange={setInputValue} defaultValue={0} />
            <Text>Button</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
