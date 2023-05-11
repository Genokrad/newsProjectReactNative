import { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { styles } from "../RegistrationScreen/RegistrationScreen.styled";

export const LoginScreen = () => {
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

  return (
    <View style={styles.wraper}>
      <View style={styles.loginBox}>
        <Text style={styles.titleText}>Войти</Text>
        <KeyboardAvoidingView
          style={styles.form}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={440}
        >
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
            Войти
          </Text>
        </TouchableOpacity>
        <View style={styles.textBox}>
          <Text>Нет аккаунта?</Text>
          <Text> Зарегистрироваться</Text>
        </View>
      </View>
    </View>
  );
};
