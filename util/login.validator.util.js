/* ARCHIVO DE VALIDACIONES */
import { Alert } from "react-native";

export function checkFields(user, pass, setUser, setPass, nav) {
  if (user === "" || pass === "") {
    return Alert.alert(
      "Ingresa los datos correspondientes",
      "Debes ingresar tu nombre de usuario y tu contraseña"
    );
  } else {
    setUser("");
    setPass("");
    nav.navigate("home");
  }
}
