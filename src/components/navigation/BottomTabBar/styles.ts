import { StyleSheet } from "react-native";

export const COLORS = {
  background: "#F5ECDD",
  brown: "#8C5233",
  lightBrown: "#C9B39D",
  orange: "#F39B6D",
  peach: "#F6D2A8",
  white: "#FFFFFF",
  border: "#D8C7B3",
};

export const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 108,
    backgroundColor: "#EFE4D3",
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 20,
  },
});
