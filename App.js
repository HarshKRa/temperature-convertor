import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import hotBackground from "./assets/hot.png";
import coldBackground from "./assets/cold.png";
import { Input } from "./components/Input/Input";
import { useEffect, useState } from "react";
import { DisplayTemperature } from "./components/displayTemperature/DisplayTemperature";
import {
  UNITS,
  convertTemperatureTo,
  getOppositeUnit,
  isIceTemperature,
} from "./utils/temperature";
import { ButtonConvert } from "./components/ButtonConvert/ButtonConvert";

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentBackground, setCurrentBackground] = useState(coldBackground);
  const [unit, setUnit] = useState("°C");
  const oppositeUnit = getOppositeUnit(unit);

  useEffect(() => {
    const isCold = isIceTemperature(inputValue, unit);
    setCurrentBackground(isCold ? coldBackground : hotBackground);
  }, [inputValue, unit]);

  function getConvertedTemperature() {
    if (isNaN(inputValue)) return "";
    else return convertTemperatureTo(inputValue, oppositeUnit).toFixed(1);
  }
  return (
    <ImageBackground style={s.backgroundImage} source={currentBackground}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workSpace}>
            <DisplayTemperature
              unit={oppositeUnit}
              temperature={getConvertedTemperature()}
            />
            <Input unit={unit} onChange={setInputValue} defaultValue={0} />
            <ButtonConvert
              onPress={() => {
                setUnit(oppositeUnit);
              }}
              unit={unit}
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
