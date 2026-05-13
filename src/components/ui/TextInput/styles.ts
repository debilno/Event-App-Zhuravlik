import { theme } from "@/src/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 13,
  },
  label: {
    marginBottom: 6,
    color: theme.colors.text.primary,
  },

  eyeIcon: {
    width: 24,
    height: 24,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: theme.colors.border.default,
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 14,
    fontWeight: "500",
    color: theme.colors.text.primary,
  },
  eyeBtn: {
    paddingLeft: 8,
  },

  error: {
    marginTop: 4,
    marginLeft: 4,
  },
});
