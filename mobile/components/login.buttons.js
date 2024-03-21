import {
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import loginStyles from "../styles/login.style";

import { checkFields } from "../util/login.validator.util";

export function LoginButton({ user, pass, setUser, setPass, nav }) {
  return (
    <TouchableHighlight
      style={loginStyles.btnLoginContainer}
      underlayColor={"#fff"}
      activeOpacity={0.8}
      onPress={() => {
        checkFields(user, pass, setUser, setPass, nav);
      }}
    >
      <View style={loginStyles.btnLogin}>
        <Text style={loginStyles.btnLoginText}>Iniciar Sesion</Text>
      </View>
    </TouchableHighlight>
  );
}

export function RegisterButton({ nav }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        nav.navigate("register");
      }}
    >
      <Text style={loginStyles.btnRegister}>Registrarme</Text>
    </TouchableWithoutFeedback>
  );
}
