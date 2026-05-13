import { theme } from "@/src/constants/theme";
import { ActivityIndicator, Pressable, ViewStyle } from "react-native";
import { Text } from "../Text/Text";
import { styles } from "./styles";

type Variant = "primary" | "secondary";

interface Props {
  title?: string;
  onPress?: () => void;
  variant?: Variant;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
}

export const Button = ({
  title,
  onPress,
  variant = "primary",
  disabled,
  loading,
  style,
}: Props) => {
  const isPrimary = variant === "primary";

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.base,

        isPrimary && {
          backgroundColor: disabled
            ? theme.colors.button.disabled
            : pressed
              ? theme.colors.button.primaryPressed
              : theme.colors.button.primary,
        },

        !isPrimary && {
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: disabled
            ? theme.colors.text.secondary
            : theme.colors.brand.primary,
        },

        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          color={
            isPrimary ? theme.colors.text.inverse : theme.colors.brand.primary
          }
        />
      ) : (
        <Text
          style={styles.text}
          color={
            isPrimary
              ? theme.colors.text.inverse
              : disabled
                ? theme.colors.text.secondary
                : theme.colors.brand.primary
          }
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
};
