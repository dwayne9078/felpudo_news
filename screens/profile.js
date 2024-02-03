import { Button, Text, SafeAreaView } from "react-native";

import homeStyles from '../styles/home.style';

export default function ProfileScreen ({ navigation }) {
    return (
        <SafeAreaView style={[homeStyles.container, {flex:1}]}>
            <Text>AQUI VA EL PROFILE SCREEN</Text>
            <Button title="Cerrar Sesion" onPress={() => {navigation.navigate("Login")}}/>
        </SafeAreaView>
    )
}