import { theme } from "@/src/constants/theme";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { Text } from "../Text/Text";
import { styles } from "./styles";

interface Props extends TextInputProps {
  label?: string;
  error?: string;
  isPassword?: boolean;
}

export const CustomInput = ({ label, error, isPassword, ...rest }: Props) => {
  const [hidden, setHidden] = useState(isPassword ?? false);

  return (
    <View style={styles.container}>
      {label ? (
        <Text variant="caption" style={styles.label}>
          {label}
        </Text>
      ) : null}

      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholderTextColor={theme.colors.text.secondary}
          secureTextEntry={hidden}
          autoCapitalize="none"
          {...rest}
        />

        {isPassword ? (
          <Pressable
            onPress={() => setHidden((v) => !v)}
            style={styles.eyeBtn}
            hitSlop={8}
          >
            <Text style={styles.eyeIcon}>
              {hidden ? (
                <Image
                  source={require("../../../../assets/images/EyeClosed.png")}
                />
              ) : (
                <Image source={require("../../../../assets/images/Eye.png")} />
              )}
            </Text>
          </Pressable>
        ) : null}
      </View>

      {/* Ошибка под полем */}
      {error ? (
        <Text
          variant="caption"
          color={theme.colors.status.error}
          style={styles.error}
        >
          {error}
        </Text>
      ) : null}
    </View>
  );
};
