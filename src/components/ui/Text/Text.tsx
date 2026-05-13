import { theme } from "@/src/constants/theme";
import { Text as RNText, TextProps } from "react-native";
import { styles } from "./styles";

type Variant = "h1" | "h2" | "body" | "caption";

interface Props extends TextProps {
  variant?: Variant;
  color?: string;
}

export const Text = ({ variant = "body", color, style, ...props }: Props) => {
  return (
    <RNText
      {...props}
      style={[
        styles[variant],
        { color: color || theme.colors.text.primary },
        style,
      ]}
    />
  );
};
