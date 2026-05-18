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
  userChip: {
    height: 38,
    borderRadius: 19,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },

  userChipActive: {
    backgroundColor: COLORS.brown,
  },

  userChipInactive: {
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  userAvatarSmall: {
    width: 28,
    height: 28,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  userAvatarSmallActive: {
    backgroundColor: "#A96A47",
  },

  userAvatarSmallInactive: {
    backgroundColor: "#F2E7D7",
  },

  userAvatarSmallText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "700",
  },

  userAvatarSmallTextInactive: {
    color: COLORS.brown,
  },

  userChipText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "700",
  },

  userChipTextInactive: {
    color: COLORS.brown,
  },
});
