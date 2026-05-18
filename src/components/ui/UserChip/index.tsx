import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type UserChipProps = {
  name: string;
  initial: string;
  active?: boolean;
  onPress?: () => void;
};

export const UserChip = ({ name, initial, active, onPress }: UserChipProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.userChip,
        active ? styles.userChipActive : styles.userChipInactive,
      ]}
    >
      <View
        style={[
          styles.userAvatarSmall,
          active
            ? styles.userAvatarSmallActive
            : styles.userAvatarSmallInactive,
        ]}
      >
        <Text
          style={[
            styles.userAvatarSmallText,
            !active && styles.userAvatarSmallTextInactive,
          ]}
        >
          {initial}
        </Text>
      </View>

      <Text
        style={[styles.userChipText, !active && styles.userChipTextInactive]}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};
