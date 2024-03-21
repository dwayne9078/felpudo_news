import { View, Text, Image } from "react-native";

export function ItemList({ title, date, imageUri }) {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{date}</Text>
      <Image source={require(imageUri)} />
    </View>
  );
}