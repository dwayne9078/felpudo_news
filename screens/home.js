import { Text, View } from "react-native";

import homeStyles from '../styles/home.style';

export default function HomeScreen ({ navigation }) {
    return (
        <View style={homeStyles.container}>
            <Text>AQUI VA EL HOME SCREEN</Text>
        </View>
    )
}