import { Image, Text, View, KeyboardAvoidingView } from "react-native";

import loginStyles from "../styles/login.style";

export function Header() {
  return (
    <View style={loginStyles.header}>
      <Image source={require("../assets/logo.jpg")} style={loginStyles.logo} />
      <Text style={loginStyles.title}>¡Hola de Nuevo!</Text>
    </View>
  );
}

export function Body({ children }) {
  return <View style={loginStyles.body}>{children}</View>;
}

export function KeyboardWrapper({ children }) {
  return <View style={{ flex: 2 }}>{children}</View>;
}


export function KeyboardAvoidViewWrapper ({children}) {
  return (
    <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={0}
          style={{ flex: 2 }}
        >
          {children}
        </KeyboardAvoidingView>
  )
}