import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
  container: {
    backgroundColor: "#A9BEF0",
  },
  card: {
    backgroundColor: "#3979A0",
    marginLeft: 25,
    marginRight: 25,
    height: 210,
    borderRadius: 37,
  },
  cardTitle: {
    marginTop: 15,
    marginLeft: 30,
    fontSize: 20,
    fontWeight: "bold",
    color: '#fff'
  },
  textColor: {
    color: "#000",
  },
  title: {
    fontWeight: "bold",
    margin: 10,
    fontSize: 35,
    textAlign: "center",
  },
  subtitle: {
    color: '#044974',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20
  },
  itemList: {
    height: 120,
    borderColor: '#000',
    borderBottomWidth: 2,
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between'
  },
  listTitle: {
    color: '#222222',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10
  },
  listDetail: {
    color: '#525151',
    fontWeight: 'bold',
    marginTop: 50
  },
  listImage: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 20,
    marginRight: 20
  }
});

export default homeStyles;
