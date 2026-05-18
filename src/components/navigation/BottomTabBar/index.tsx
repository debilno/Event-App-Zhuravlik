import { Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View } from "react-native";
import { COLORS, styles } from "./styles";

const TABS = [
  { name: "home", icon: "home-outline" },
  { name: "tickets", icon: "ticket-outline" },
  { name: "profile", icon: "person-outline" },
] as const;

export const BottomTabBar = ({ state, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.tabBar}>
      {TABS.map((tab) => {
        const isFocused = state.routeNames[state.index] === tab.name;

        return (
          <TouchableOpacity
            key={tab.name}
            onPress={() => navigation.navigate(tab.name)}
            activeOpacity={0.7}
          >
            <Ionicons
              name={tab.icon}
              size={34}
              color={isFocused ? COLORS.brown : "#000"}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
