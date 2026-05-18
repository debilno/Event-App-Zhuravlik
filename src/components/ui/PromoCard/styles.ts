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
  promoCard: {
    marginTop: 24,
    height: 290,
    backgroundColor: COLORS.orange,
    borderRadius: 32,
    padding: 24,
    overflow: "hidden",
    justifyContent: "space-between",
  },

  promoTopText: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.brown,
    lineHeight: 24,
  },

  promoTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.white,
    lineHeight: 34,
    width: "70%",
  },

  promoShape: {
    position: "absolute",
    right: -40,
    top: -10,
    width: 280,
    height: 280,
    borderRadius: 140,
    borderWidth: 18,
    borderColor: "#FFD79F",
  },
});
