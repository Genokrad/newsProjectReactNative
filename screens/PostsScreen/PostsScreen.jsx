import {
  SafeAreaView,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";

export const PostsScreen = () => {
  return (
    <View style={styles.mainMenuBox}>
      <View style={styles.topPanel}>
        <Text style={styles.titleText}>Публикации</Text>
      </View>
      <View style={styles.hr}></View>
      <View style={styles.mainWorkSpace}>
        <View style={styles.card}>
          <View style={styles.photoBox}></View>
          <View>
            <Text style={styles.nameText}>Natali Romanova</Text>
            <Text style={styles.emailText}>email@example.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.hr}></View>
      <View style={styles.controllPanel}>
        <TouchableOpacity style={styles.addButton}>
          <View style={styles.crossOne}></View>
          <View style={styles.crossTwo}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainMenuBox: {
    position: "relative",
    alignItems: "center",
    backgroundColor: "#E5E5E5",
    height: "100%",
    width: "100%",
    borderRadius: "25px 25px 0px 0px",
    paddingTop: 40,
    paddingBottom: 34,
    paddingLeft: 16,
    paddingRight: 16,
  },
  topPanel: {
    alignItems: "center",
    width: "100%",
    // backgroundColor: "blue",
  },
  titleText: {
    paddingTop: 27,
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    fontSize: 17,
    lineHeight: 22,
  },
  hr: {
    marginTop: 11,
    width: "120%",
    height: 0.5,
    backgroundColor: "#00000047",
  },
  card: {
    paddingBottom: 32,
    paddingTop: 32,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  photoBox: {
    width: 64,
    height: 64,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  nameText: {
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 15,
  },
  emailText: {
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 11,
    lineHeight: 13,
  },
  textProfileBox: {},
  mainWorkSpace: {
    // height: "78,94%",
    height: "85%",
    width: "100%",
  },
  controllPanel: {
    paddingTop: 9,
    width: "100%",
    // backgroundColor: "blue",
    alignItems: "center",
  },
  crossOne: {
    width: 1,
    height: 13,
    backgroundColor: "#FFFFFF",
    transform: "rotate(90deg)",
    position: "absolute",
  },
  crossTwo: {
    width: 1,
    height: 13,
    backgroundColor: "#FFFFFF",
    position: "absolute",
  },
  addButton: {
    borderColor: "#FF6C00",
    borderWidth: 1,
    borderRadius: "50%",
    backgroundColor: "#FF6C00",
    width: 70,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
