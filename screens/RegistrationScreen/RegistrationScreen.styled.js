import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  crossOne: {
    width: 1,
    height: 13,
    backgroundColor: "#FF6C00",
    transform: "rotate(90deg)",
    position: "absolute",
  },
  crossTwo: {
    width: 1,
    height: 13,
    backgroundColor: "#FF6C00",
    position: "absolute",
  },
  crossRing: {
    position: "absolute",
    bottom: 14,
    right: -12.5,
    borderColor: "#FF6C00",
    borderWidth: 1,
    borderRadius: "50%",
    backgroundColor: "#FFFFFF",
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  titleText: {
    paddingTop: 32,
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
  },

  normalText: {
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 16,
  },

  wraper: {
    width: "100%",
    height: "100%",
    // marginTop: "auto",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  box: {
    position: "relative",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    width: "100%",
    borderRadius: "25px 25px 0px 0px",
    paddingTop: 60,
    paddingBottom: 78,
    paddingLeft: 16,
    paddingRight: 16,
  },

  loginBox: {
    position: "relative",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    width: "100%",
    borderRadius: "25px 25px 0px 0px",
    // paddingTop: 60,
    paddingBottom: 144,
    paddingLeft: 16,
    paddingRight: 16,
  },

  photoBox: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    position: "absolute",
    zIndex: 1,
    borderRadius: 16,
    top: -60,
  },

  textBox: {
    marginTop: 16,
    display: "flex",
    flexDirection: "row",
  },

  form: {
    position: "relative",
    marginTop: 32,
    // height: "30%",
    width: "100%",
    gap: 16,
    marginBottom: 32,
  },

  input: {
    backgroundColor: "#F6F6F6",
    height: 40,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 8,
  },

  showText: {
    position: "absolute",
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 16,
    bottom: 26,
    right: 16,
  },

  button: {
    marginTop: 11,
    backgroundColor: "#FF6C00",
    padding: 16,
    borderRadius: "100px",
    width: "100%",
  },
  buttonText: {
    fontFamily: "Roboto-Medium",
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});
