import axios from "axios";
import { useState, useRef } from "react";
import {
  Alert,
  Pressable,
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import registerStyles from "../styles/register.style";
import { API_REGISTER } from "../util/constants.util";

export function Register({ navigation }) {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [pass2, setPass2] = useState(null);
  const [age, setAge] = useState("0");

  /* Refs para redireccionar el focus */
  const [userRef, ageRef, passRef, pass2Ref] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  function checkFields() {
    if (username !== null && age !== 0 && password !== null && pass2 !== null) {
      if (age < 0 || age === "000") {
        return Alert.alert("Error", "Edad no valida");
      }
      if (age > 100) {
        return Alert.alert("EDAD NO VALIDA", "Maximo 100 años");
      }

      /* ToDo: Poner mas validaciones */
      const data = {
        username: username,
        age: age,
        pass: password,
      };

      console.log(data.username);
      console.log(data.age);
      console.log(data.password);

      axios
        .post(API_REGISTER, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(
          (res) => {
            console.log(res.data);
            Alert.alert(res.data, "Bienvenido a Felpudo News", () =>
              navigation.navigate("home")
            );
          },
          (err) => console.log(err)
        );
    } else {
      return Alert.alert("Error", "Campos vacios");
    }
  }

  return (
    <Pressable onPress={() => Keyboard.dismiss()} style={{ flex: 1 }}>
      <SafeAreaView style={registerStyles.bg}>
        <View style={{ flex: 1 }}>
          <View style={{ alignItems: "flex-start" }}>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "#fff" : null },
                registerStyles.backbtn,
              ]}
              onPress={() => navigation.navigate("login")}
            >
              <Ionicons name="chevron-back" style={registerStyles.icon} />
              <Text style={registerStyles.backbtn_text}>Regresar</Text>
            </Pressable>
          </View>
          <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={0}
            style={{ flex: 1, justifyContent: "center" }}
          >
            <View>
              <Text style={registerStyles.title}>Registro</Text>
              <Text style={registerStyles.label}>Username</Text>
              <TextInput
                autoCapitalize="none"
                autoComplete="off"
                autoFocus={true}
                keyboardAppearance="dark"
                onChangeText={(txt) => setUsername(txt)}
                onSubmitEditing={() => ageRef.current.focus()}
                ref={userRef}
                returnKeyType="next"
                style={registerStyles.input}
                value={username}
              />
              <Text style={registerStyles.label}>Edad</Text>
              <TextInput
                keyboardAppearance="dark"
                keyboardType="numeric"
                maxLength={3}
                onChangeText={(txt) => setAge(txt)}
                ref={ageRef}
                returnKeyType="next"
                style={registerStyles.input}
                value={age}
              />
              <Text style={registerStyles.label}>Contraseña</Text>
              <TextInput
                autoCapitalize="none"
                keyboardAppearance="dark"
                onChangeText={(txt) => setPassword(txt)}
                onSubmitEditing={() => pass2Ref.current.focus()}
                ref={passRef}
                returnKeyType="next"
                secureTextEntry={true}
                style={registerStyles.input}
                value={password}
              />
              <Text style={registerStyles.label}>Verificar contraseña</Text>
              <TextInput
                autoCapitalize="none"
                keyboardAppearance="dark"
                onChangeText={(txt) => setPass2(txt)}
                ref={pass2Ref}
                returnKeyType="done"
                secureTextEntry={true}
                style={registerStyles.input}
                value={pass2}
              />
              <Pressable
                onPress={() => checkFields()}
                style={({ pressed }) => [
                  registerStyles.submit,
                  {
                    opacity: pressed ? 0.7 : 1,
                    backgroundColor: pressed ? "#fff" : "#b80000",
                  },
                ]}
              >
                <Text style={registerStyles.submit_text}>Registrarme</Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </View>

        <View style={registerStyles.circle} />
      </SafeAreaView>
    </Pressable>
  );
}
