import { View, TextInput, Text } from "react-native";
import { s } from "./Input.style";

export function Input({ defaultValue }) {
  return (
    <View style={s.root}>
      <TextInput
        style={s.input}
        maxLength={3}
        placeholder="Type Your Temperature"
        defaultValue={defaultValue.toString()}
      />
      <Text style={s.unit}>°C</Text>
    </View>
  );
}
