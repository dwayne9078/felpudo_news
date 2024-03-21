import { StyleSheet } from "react-native";
import { TEXT_COLOR } from "../util/constants.util";

const registerStyles = StyleSheet.create({
  bg: {
    backgroundColor: "#00164b",
    flex: 1,
  },
  title: {
    fontWeight: "300",
    fontSize: 35,
    textAlign: "center",
    marginBottom: 5,
    color: TEXT_COLOR,
    letterSpacing: 2,
  },
  label: {
    fontWeight: "700",
    marginLeft: 50,
    marginVertical: 5,
    fontSize: 18,
    opacity: 0.7,
    color: TEXT_COLOR,
  },
  input: {
    marginHorizontal: 50,
    height: 50,
    paddingLeft: 20,
    backgroundColor: "#ffffff15",
    color: TEXT_COLOR,
    borderRadius: 10,
    fontSize: 16,
  },
  submit: {
    backgroundColor: "#b80000",
    marginTop: 20,
    marginHorizontal: 50,
    padding: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    display: "flex",
    alignItems: "center",
  },
  submit_text: {
    color: TEXT_COLOR,
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0.1,
  },
  circle: {
    width: 500,
    height: 400,
    // borderRadius: 150,
    borderBottomRightRadius: 250,
    borderBottomLeftRadius: 300,
    zIndex: -1,
    position: "absolute",
    top: 0,
    opacity: 0.3,
    backgroundColor: "#044974",
  },
  icon: {
    fontSize: 18,
    color: "#04497f",
    fontWeight: "100",
    marginRight: 5,
  },
  backbtn: {
    borderWidth: 1,
    borderColor: "#04497f",
    borderRadius: 25,
    padding: 5,
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  backbtn_text: {
    color: "#04497f",
    fontWeight: "500",
    fontSize: 15,
    letterSpacing: 0.5,
    marginRight: 10,
  },
});

export default registerStyles;
