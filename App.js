import { StatusBar } from "expo-status-bar";
import React from "react";
import { useFonts } from "expo-font";

import { SafeAreaView, StyleSheet, View, ImageBackground } from "react-native";
import { RegistrationScreen } from "./screens/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./screens/LoginScreen/LoginScreen";
import { PostsScreen } from "./screens/PostsScreen/PostsScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/roboto/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/roboto/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/bcgPhoto.jpg")}
        style={styles.background}
      >
        <RegistrationScreen />
        {/* <LoginScreen /> */}
        {/* <PostsScreen /> */}
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    width: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

// SafeAreaView див с сохранением границ разных показателей телефона , время, заряд и тд
// TouchableHighlight обькт которые дает возможность повесить на эллемент клик
// TouchableWithoutFeedback обькт которые дает возможность повесить на эллемент клик
