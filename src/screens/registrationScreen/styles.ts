import { theme } from "@/src/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
    paddingHorizontal: 40,
    paddingTop: 126,
    paddingBottom: 32,
  },

  title: {
    color: theme.colors.brand.primary,
    marginBottom: 37,
  },

  backButton: {
    position: "absolute",
    top: 20,
    left: 12,

    width: 32,
    height: 32,
  },

  registerBtn: {
    marginBottom: 0,
  },

  footer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingBottom: 16,
  },
  footerText: {
    color: theme.colors.text.primary,
  },
});
