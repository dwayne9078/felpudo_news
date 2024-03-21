import {
  Button,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from "react-native";

import homeStyles from "../styles/home.style";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#A9BEF0" }}>
      <ScrollView style={homeStyles.container}>
        <Text style={[homeStyles.textColor, homeStyles.title]}>
          Felpudo News
        </Text>
        <View style={homeStyles.card}>
          <Text style={homeStyles.cardTitle}>Noticia Destacada del Dia</Text>
        </View>
        <Text style={homeStyles.subtitle}>Últimas Noticias del Gaming</Text>
        <View style={homeStyles.itemList}>
          <View style={{ marginLeft: 20 }}>
            <Text style={homeStyles.listTitle}>Sony Anuncia la PS6</Text>
            <Text style={homeStyles.listDetail}>Hace 3 horas</Text>
          </View>
          <ImageBackground
            source={require("../assets/img1.png")}
            resizeMode="cover"
            style={homeStyles.listImage}
          />
        </View>
        <View style={homeStyles.itemList}>
          <View style={{ marginLeft: 20 }}>
            <Text style={homeStyles.listTitle}>Sony Anuncia la PS6</Text>
            <Text style={homeStyles.listDetail}>Hace 3 horas</Text>
          </View>
          <ImageBackground
            source={require("../assets/img2.jpg")}
            resizeMode="cover"
            style={homeStyles.listImage}
          />
        </View>
        <View style={homeStyles.itemList}>
          <View style={{ marginLeft: 20 }}>
            <Text style={homeStyles.listTitle}>Sony Anuncia la PS6</Text>
            <Text style={homeStyles.listDetail}>Hace 3 horas</Text>
          </View>
          <ImageBackground
            source={require("../assets/img3.webp")}
            resizeMode="cover"
            style={homeStyles.listImage}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
