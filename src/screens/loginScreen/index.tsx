import { Button } from "@/src/components/ui/Button";
import { Text } from "@/src/components/ui/Text/Text";
import { CustomInput } from "@/src/components/ui/TextInput";
import { theme } from "@/src/constants/theme";
import { SignInResponse } from "@/src/types/auth";

import { router } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, Switch, View } from "react-native";

import { saveToken } from "@/src/storage/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { styles } from "./styles";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      const authResponse = await axios.post<SignInResponse>(
        "http://192.168.0.10:8000/api/v1/auth/signin",
        {
          email,
          password,
        },
        {
          headers: {
            "user-agent": "mobile-app",
            "x-fingerprint": "expo-device-123",
            "x-api-key": "12",
          },
        },
      );

      const { accessToken, refreshToken } = authResponse.data;

      // СОХРАНЯЕМ
      await AsyncStorage.setItem("accessToken", accessToken);
      await AsyncStorage.setItem("refreshToken", refreshToken);
      await saveToken(accessToken);

      router.replace("/home");
      router.replace("/home");
    } catch (error: any) {
      console.log(error?.response?.data);
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.logoWrapper}>
        <Image
          style={styles.logo}
          source={require("../../../assets/images/logo.png")}
          resizeMode="contain"
        />
      </View>

      <Text variant="h1" style={styles.title}>
        Вход
      </Text>

      <CustomInput
        placeholder="example@mail.ru"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoComplete="email"
      />

      <CustomInput
        label="Пароль"
        placeholder="Пароль"
        value={password}
        onChangeText={setPassword}
        isPassword
        autoComplete="current-password"
      />

      <View style={styles.row}>
        <Switch
          value={rememberMe}
          onValueChange={setRememberMe}
          trackColor={{
            false: theme.colors.border.default,
            true: theme.colors.button.primary,
          }}
          thumbColor="#ffffff"
        />

        <Text variant="body" style={styles.rememberLabel}>
          Запомнить меня
        </Text>

        <Pressable hitSlop={8}>
          <Text variant="body" color={theme.colors.text.secondary}>
            Забыли пароль?
          </Text>
        </Pressable>
      </View>

      <Button
        title={loading ? "Загрузка..." : "Войти"}
        onPress={handleLogin}
        style={styles.loginBtn}
      />

      <View style={styles.footer}>
        <Text variant="body" color={theme.colors.text.primary}>
          Нет аккаунта?{" "}
        </Text>

        <Pressable onPress={() => router.push("/register")} hitSlop={8}>
          <Text variant="body" color={theme.colors.accent.strong}>
            Создать
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
