import { useState } from "react";
import {
  Keyboard,
  SafeAreaView,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";

import { PasswordInput, UsernameInput } from "../components/login.inputs";
import { AuthenticationMessage } from "../components/login.messages";
import { LoginButton, RegisterButton } from "../components/login.buttons";
import {
  Header,
  Body,
  KeyboardWrapper,
  KeyboardAvoidViewWrapper,
} from "../components/login.divs";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [passMessage, setPassMessage] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <StatusBar barStyle={"dark-content"} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidViewWrapper>
          <KeyboardWrapper>
            <Header />
            <Body>
              <UsernameInput user={username} setUsername={setUsername} />
              <AuthenticationMessage msg={userMessage} />
              <PasswordInput pass={pass} setPass={setPass} />
              <AuthenticationMessage msg={passMessage} />
              <LoginButton
                user={username}
                pass={pass}
                setUser={setUsername}
                setPass={setPass}
                nav={navigation}
              />
              <RegisterButton nav={navigation}/>
            </Body>
          </KeyboardWrapper>
        </KeyboardAvoidViewWrapper>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
