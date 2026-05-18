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
  eventCard: {
    borderRadius: 32,
    overflow: "hidden",
    backgroundColor: "#F2CC9A",
  },
  eventImage: {
    width: "100%",
    height: 280,
  },

  eventContent: {
    padding: 20,
  },

  eventTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: COLORS.brown,
  },

  ageBadge: {
    alignSelf: "flex-start",
    marginTop: 14,
    backgroundColor: COLORS.orange,
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 8,
  },

  eventDate: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffffff",
    left: 230,
    top: 40,
  },

  ageBadgeText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "700",
  },
});
