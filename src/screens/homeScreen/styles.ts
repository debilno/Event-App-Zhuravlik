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
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 20,
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 150,
  },

  header: {
    marginTop: 12,
  },

  mainAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: COLORS.brown,
    alignItems: "center",
    justifyContent: "center",
  },

  mainAvatarText: {
    color: COLORS.white,
    fontSize: 32,
    fontWeight: "700",
  },

  greeting: {
    marginTop: 18,
    fontSize: 30,
    fontWeight: "700",
    color: COLORS.brown,
    lineHeight: 35,
  },

  usersRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 21,
  },

  userChip: {
    height: 54,
    borderRadius: 27,
    paddingHorizontal: 12,
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
    width: 38,
    height: 38,
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
    fontSize: 16,
    fontWeight: "700",
  },

  userAvatarSmallTextInactive: {
    color: COLORS.brown,
  },

  userChipText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "700",
  },

  userChipTextInactive: {
    color: COLORS.brown,
  },

  addChildButton: {
    height: 37,
    borderRadius: 85,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 13,
    alignItems: "center",
    justifyContent: "center",
  },

  addChildText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.lightBrown,
  },

  categoriesWrapper: {
    marginTop: 21,
  },

  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginTop: 12,
  },

  sectionTitle: {
    marginTop: 12,
    marginBottom: 8,
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.brown,
  },
});
