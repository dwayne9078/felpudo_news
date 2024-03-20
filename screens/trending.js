import { Text, SafeAreaView, View, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import homeStyles from "../styles/home.style";

const data = [
  {
    name: "CS 2",
    avg_players: 36.64,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Dota 2",
    avg_players: 19.41,
    color: "#F00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "PUBG",
    avg_players: 10.9,
    color: "#3979A0",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Baldur's",
    avg_players: 8.16,
    color: "#0016ff",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "TF2",
    avg_players: 7.65,
    color: "#B80000",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundGradientFrom: "#D9D9D9",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#D9D9D9",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  useShadowColorFromDataset: false,
  decimalPlaces: 0,
};

export default function TrendingScreen({ navigation }) {
  return (
    <SafeAreaView style={[homeStyles.container, { flex: 1 }]}>
      <Text style={homeStyles.title}>Ultimas Tendencias del Gaming</Text>
      <Text style={homeStyles.subtitle}>Juegos Más Populares</Text>
      <View
        style={{
          alignItems: "center",
          marginBottom: 20,
          backgroundColor: "#00164B",
        }}
      >
        <PieChart
          data={data}
          width={screenWidth * 0.9}
          height={250}
          chartConfig={chartConfig}
          accessor={"avg_players"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          absolute
        />
      </View>
    </SafeAreaView>
  );
}
