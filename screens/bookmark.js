import { Text, SafeAreaView } from "react-native";

import homeStyles from "../styles/home.style";

export default function BookmarkScreen({ navigation }) {
  return (
    <SafeAreaView style={[homeStyles.container, { flex: 1 }]}>
      <Text>AQUI VA EL BOOKMARK SCREEN</Text>
    </SafeAreaView>
  );
}
