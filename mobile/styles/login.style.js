import { StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({
  header: {
    backgroundColor: "#044974",
    flex: 1.2,
    alignItems: "center",
  },
  body: {
    backgroundColor: "#00164b",
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    borderRadius: 10,
    color: "#fff",
    width: 320,
    height: 62,
    backgroundColor: "#ffffff15",
    borderColor: "#938f99",
    marginTop: 40,
    paddingLeft: 20,
    fontSize: 20,
  },
  logo: {
    width: 187,
    height: 187,
    borderRadius: 100,
    alignSelf: "center",
    marginTop: 20,
  },
  title: {
    color: "white",
    fontSize: 30,
    // fontFamily: "Arial",
    fontWeight: "700",
    textAlign: "center",
    marginTop: 10,
  },
  btnLogin: {
    width: 320,
    backgroundColor: "#b80000",
    height: 53,
    borderRadius: 100,
    justifyContent: "center",
  },
  btnLoginContainer: {
    marginTop: 40,
    height: 53,
    borderRadius: 100,
  },
  btnLoginText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 22,
    // fontFamily: "Arial",
    fontWeight: "500",
  },
  btnRegister: {
    color: "#938F99",
    fontSize: 20,
    margin: 20,
  },
  authMsgText: {
    color: "#fff",
  },
});

export default loginStyles;
