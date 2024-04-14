import { useEffect, useState } from "react";
import { Button, Text, SafeAreaView, View, Image, Alert } from "react-native";
import axios from "axios";

import homeStyles from "../styles/home.style";
import profileStyles from "../styles/profile.stye";
import { API_LOGOUT, API_USER } from "../util/constants.util";

export default function ProfileScreen({ navigation }) {
  const [username, setUsername] = useState(null);
  axios.get(API_USER).then((res) => {
    console.log(`Respuesta de la peticion: ${res.data}`);
    setUsername(res.data.user);
  });

  return (
    <SafeAreaView style={[homeStyles.container, { flex: 1 }]}>
      <View style={profileStyles.portrait}>
        <View style={profileStyles.photo}>
          <Image
            style={profileStyles.photo_img}
            source={require("../assets/photo.jpg")}
          />
        </View>
      </View>
      <View style={{ height: 75 }}>
        <Text style={profileStyles.title}>{username}</Text>
      </View>
      <Button
        title="Cerrar Sesion"
        onPress={() => {
          axios.post(API_LOGOUT, undefined).then((res) => {
            console.log(res.data);
            Alert.alert("ALERTA", res.data.mensaje, [
              { text: "Ok", onPress: () => navigation.navigate("login") },
            ]);
          });
        }}
      />
    </SafeAreaView>
  );
}
