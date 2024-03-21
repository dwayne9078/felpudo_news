/* ARCHIVO DE VALIDACIONES */
import axios from "axios";
import { Alert } from "react-native";
import { API_LOGIN } from "./constants.util";

export function checkFields(user, pass, setUser, setPass, nav) {
  if (user === "" || pass === "") {
    return Alert.alert(
      "Ingresa los datos correspondientes",
      "Debes ingresar tu nombre de usuario y tu contraseña"
    );
  } else {
    setUser("");
    setPass("");

    const userData = {
      username: user,
      password: pass,
    };

    console.log(userData);

    axios.post(API_LOGIN, userData).then(
      (response) => {
        console.log(response.data);
        if (response.data.status === 200) {
          Alert.alert(response.data.mensaje, "Zona Gaming del Momento...", [
            { text: "Ok", onPress: () => nav.navigate("home") },
          ]);
        } else {
          Alert.alert(response.data.mensaje, "Verifica tus credenciales");
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
