import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FFF9F3",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },

  handle: {
    backgroundColor: "#D8C7B3",
    width: 64,
  },

  sheet: {
    padding: 24,
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 28,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#8C5233",
  },

  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3E5D6",
  },

  closeText: {
    fontSize: 18,
    color: "#8C5233",
  },

  inputWrapper: {
    marginBottom: 20,
  },

  label: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "#8C5233",
  },

  input: {
    height: 58,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5D7C8",
    paddingHorizontal: 18,
    justifyContent: "center",
    fontSize: 16,
    color: "#2B2B2B",
  },

  dateText: {
    fontSize: 16,
    color: "#2B2B2B",
  },

  primaryButton: {
    height: 58,
    borderRadius: 18,
    backgroundColor: "#F39B6D",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },

  secondaryButton: {
    height: 58,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#D8C7B3",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 14,
  },

  secondaryButtonText: {
    color: "#8C5233",
    fontSize: 17,
    fontWeight: "600",
  },

  buttons: {
    gap: 12,
    marginTop: 20,
  },
});
