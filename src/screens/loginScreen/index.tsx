import { Button } from "@/src/components/ui/Button";
import { Text } from "@/src/components/ui/Text/Text";
import { CustomInput } from "@/src/components/ui/TextInput";
import { theme } from "@/src/constants/theme";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, Switch, View } from "react-native";
import { styles } from "./styles";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const handleLogin = () => {
    // TODO: authService.login({ email, password })
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
        <Pressable
          onPress={() => {
            /* TODO */
          }}
          hitSlop={8}
        >
          <Text variant="body" color={theme.colors.text.secondary}>
            Забыли пароль?
          </Text>
        </Pressable>
      </View>

      {/* Кнопка входа */}
      <Button title="Войти" onPress={handleLogin} style={styles.loginBtn} />

      {/* Ссылка на регистрацию — прибита к низу через flex: 1 в footer */}
      <View style={styles.footer}>
        <Text variant="body" color={theme.colors.text.primary}>
          Нет аккаунта?{"  "}
        </Text>
        <Pressable onPress={() => router.push("/(auth)/register")} hitSlop={8}>
          <Text variant="body" color={theme.colors.accent.strong}>
            Создать
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
