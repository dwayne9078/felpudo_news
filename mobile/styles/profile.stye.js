import { StyleSheet } from "react-native";

const profileStyles = StyleSheet.create({
  portrait: {
    backgroundColor: "#0000b890",
    width: "100%",
    height: 220,
  },
  title: {
    textAlign: "right",
    fontWeight: "600",
    fontSize: 20,
    marginTop: 15,
    marginRight: 15,
  },
  photo: {
    width: 150,
    height: 150,
    zIndex: 2,
    borderColor: "#000",
    borderWidth: 2,
    position: "relative",
    left: "5%",
    top: "65%",
    backgroundColor: "#b80000",
    borderRadius: 45,
  },
  photo_img: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
});

export default profileStyles;
