import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type CategoryChipProps = {
  title: string;
  active?: boolean;
};

export const CategoryChip = ({ title, active }: CategoryChipProps) => {
  return (
    <TouchableOpacity
      style={[styles.categoryChip, active && styles.categoryChipActive]}
    >
      <Text
        style={[
          styles.categoryChipText,
          active && styles.categoryChipTextActive,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
