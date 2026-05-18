import { StyleSheet } from "react-native";

const COLORS = {
  background: "#F5ECDD",
  brown: "#8C5233",
  lightBrown: "#C9B39D",
  orange: "#F39B6D",
  peach: "#F6D2A8",
  white: "#FFFFFF",
  border: "#D8C7B3",
};

export const styles = StyleSheet.create({
  categoryChip: {
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: COLORS.lightBrown,
    paddingHorizontal: 22,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  categoryChipActive: {
    backgroundColor: COLORS.orange,
    borderColor: COLORS.orange,
  },

  categoryChipText: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.brown,
  },

  categoryChipTextActive: {
    color: COLORS.white,
  },
});
