import { TextInput } from "react-native";

import styles from "../styles/login.style";

export function UsernameInput({ setUsername }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={"Nombre de Usuario"}
      placeholderTextColor={"#fff"}
      autoCapitalize={"none"}
      keyboardType={"default"}
      keyboardAppearance="dark"
      onChangeText={(newText) => setUsername(newText)}
    />
  );
}

export function PasswordInput({ setPass }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={"Contraseña"}
      placeholderTextColor={"#fff"}
      autoCapitalize={"none"}
      secureTextEntry={true}
      keyboardAppearance="default"
      onChangeText={(newText) => setPass(newText)}
    />
  );
}
