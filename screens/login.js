import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
  TouchableHighlight,
  View,
} from "react-native";

import styles from "../styles/login.style";
import { validateFields } from "../util/login.validator.util";
import { PasswordInput, UsernameInput } from "../components/login.inputs";

export default function Login( {navigation} ) {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <StatusBar barStyle={"dark-content"} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={0} style={{ flex: 2 }}>
          <View style={{ flex: 2 }}>
            <View style={styles.header}>
              <Image
                source={require("../assets/logo.jpg")}
                style={styles.logo}
              />
              <Text style={styles.title}>¡Hola de Nuevo!</Text>
            </View>
            <View style={styles.body}>
              <UsernameInput setUsername={setUsername}/>
              <PasswordInput setPass={setPass} />
              <TouchableHighlight
                style={styles.btnLoginContainer}
                underlayColor={"#fff"}
                activeOpacity={0.8}
                onPress={() => {
                  navigation.push("home")
                  console.log(`\nUser: ${username} \nPass: ${pass}
                `);
                }}
              >
                <View style={styles.btnLogin}>
                  <Text style={styles.btnLoginText}>Iniciar Sesion</Text>
                </View>
              </TouchableHighlight>
              <TouchableWithoutFeedback
                onPress={() => {
                  console.log("PRESIONO BOTON REGISTER");
                }}
              >
                <Text style={styles.btnRegister}>Registrarme</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
