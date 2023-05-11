import { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { styles } from "./RegistrationScreen.styled";

export const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const showPassword = () => {
    console.log(pass);
  };

  const handleInputFocus = () => {
    console.log("Input focused");
  };

  const submitForm = () => {
    console.log({ login, mail, pass });
  };

  const addPhoto = () => {
    console.log("addPhoto");
  };

  return (
    <View style={styles.wraper}>
      <View style={styles.box}>
        <View style={styles.photoBox}>
          <TouchableOpacity style={styles.crossRing} onPress={addPhoto}>
            <View style={styles.crossOne}></View>
            <View style={styles.crossTwo}></View>
          </TouchableOpacity>
        </View>
        <Text style={styles.titleText}>Регистрация</Text>
        <KeyboardAvoidingView
          style={styles.form}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={400}
        >
          <TextInput
            style={styles.input}
            placeholder="Логин"
            value={login}
            onChangeText={setLogin}
            onFocus={handleInputFocus}
            name="login"
          />

          <TextInput
            style={styles.input}
            placeholder="Адрес электронной почты"
            value={mail}
            onChangeText={setMail}
            onFocus={handleInputFocus}
            name="email"
          />
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            value={pass}
            onChangeText={setPass}
            onFocus={handleInputFocus}
            name="password"
          />
          <Text style={styles.showText} onPress={showPassword}>
            Показать
          </Text>
        </KeyboardAvoidingView>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={submitForm}>
            Зарегистрироваться
          </Text>
        </TouchableOpacity>
        <View style={styles.textBox}>
          <Text>Уже есть аккаунт?</Text>
          <Text> Войти</Text>
        </View>
      </View>
    </View>
  );
};
