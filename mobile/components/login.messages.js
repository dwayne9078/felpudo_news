import { Text } from "react-native";

import loginStyles from "../styles/login.style";

export function AuthenticationMessage({ msg }) {
  return <Text style={loginStyles.authMsgText}>{msg}</Text>;
}
