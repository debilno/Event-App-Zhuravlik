import { Button } from "@/src/components/ui/Button";
import { Text } from "@/src/components/ui/Text/Text";
import { CustomInput } from "@/src/components/ui/TextInput";
import { theme } from "@/src/constants/theme";
import { router } from "expo-router";
import { useState } from "react";
import { Image, Pressable, View } from "react-native";
import { styles } from "./styles";
import axios from "axios";

export const RegistrationScreen = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");


  const handleRegister = () => {
    // TODO: authService.login({ email, password })

    axios.post("")
  };
  return (
    <View style={styles.root}>
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <Image
          source={require("../../../assets/images/ArrowLeft.png")}
          resizeMode="contain"
          style={styles.backButton}
        />
      </Pressable>

      <Text variant="h1" style={styles.title}>
        Регистрация
      </Text>

      <CustomInput
        placeholder="Иван Иванов Иванович"
        value={fullName}
        onChangeText={setFullName}
        autoComplete="name"
        label="Фио"
      />

      <CustomInput
        placeholder="example@mail.ru"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoComplete="email"
        label="Почта"
      />

      <CustomInput
        label="Пароль"
        placeholder="Ваш пароль"
        value={password}
        onChangeText={setPassword}
        isPassword
        autoComplete="current-password"
      />

      <CustomInput
        label="Потверждение пароля"
        placeholder="Повторите пароль"
        value={password}
        onChangeText={setPassword}
        isPassword
        autoComplete="current-password"
      />

      <Button
        title="Зарегистрироваться"
        onPress={handleRegister}
        style={styles.registerBtn}
      />

      <View style={styles.footer}>
        <Text variant="body" color={theme.colors.text.primary}>
          Уже есть аккаунт?{"  "}
        </Text>
        <Pressable onPress={() => router.push("/(auth)/login")} hitSlop={8}>
          <Text variant="body" color={theme.colors.accent.strong}>
            Войти
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
