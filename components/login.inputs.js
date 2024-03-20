import { TextInput } from "react-native";

import loginStyles from "../styles/login.style";

export function UsernameInput({ user, setUsername }) {
  return (
    <TextInput
      blurOnSubmit={false}
      style={loginStyles.input}
      placeholder={"Nombre de Usuario"}
      placeholderTextColor={"#fff"}
      autoCapitalize={"none"}
      keyboardType={"default"}
      keyboardAppearance="dark"
      onChangeText={(newText) => setUsername(newText)}
      value={user}
      returnKeyType="next"
    />
  );
}

export function PasswordInput({ pass, setPass }) {
  return (
    <TextInput
      style={loginStyles.input}
      placeholder={"Contraseña"}
      placeholderTextColor={"#fff"}
      autoCapitalize={"none"}
      secureTextEntry={true}
      keyboardAppearance="dark"
      onChangeText={(newText) => setPass(newText)}
      value={pass}
      returnKeyType="done"
    />
  );
}
