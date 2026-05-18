import { StyleSheet } from "react-native";

export const CHILD_COLORS = [
  { bg: "#FAC775", text: "#633806" },
  { bg: "#9FE1CB", text: "#085041" },
  { bg: "#F5C4B3", text: "#712B13" },
  { bg: "#B5D4F4", text: "#0C447C" },
];

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5EFE6",
  },
  content: {
    paddingBottom: 32,
  },
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5EFE6",
  },

  // HEADER
  header: {
    backgroundColor: "#E8DDD0",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatarLarge: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#C17A4A",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarLargeText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#fff",
  },
  headerInfo: {
    flex: 1,
  },
  headerName: {
    fontSize: 17,
    fontWeight: "600",
    color: "#3a2a1e",
  },
  headerEmail: {
    fontSize: 12,
    color: "#7a6555",
    marginTop: 2,
  },
  editBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#d6c9b8",
    alignItems: "center",
    justifyContent: "center",
  },
  editBtnText: {
    fontSize: 14,
  },

  // SECTIONS
  section: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "600",
    color: "#9a8575",
    textTransform: "uppercase",
    letterSpacing: 0.6,
    marginBottom: 8,
    paddingHorizontal: 4,
  },

  // CARD
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e8ddd2",
    overflow: "hidden",
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 13,
  },
  rowBorder: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#f0e8e0",
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  rowIconEmoji: {
    fontSize: 15,
  },
  rowLabel: {
    flex: 1,
    fontSize: 15,
    color: "#3a2a1e",
  },
  rowArrow: {
    fontSize: 20,
    color: "#c4b5a5",
    lineHeight: 22,
  },

  // CHILDREN
  childRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  childAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  childAvatarText: {
    fontSize: 14,
    fontWeight: "600",
  },
  childInfo: {
    flex: 1,
  },
  childName: {
    fontSize: 15,
    fontWeight: "500",
    color: "#3a2a1e",
  },
  addChildRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 0.5,
    borderTopColor: "#f0e8e0",
  },
  addIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F5EFE6",
    borderWidth: 1.5,
    borderColor: "#c4b5a5",
    borderStyle: "dashed",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  addIconText: {
    fontSize: 20,
    color: "#9a8575",
    lineHeight: 22,
  },
  addLabel: {
    fontSize: 15,
    color: "#9a8575",
  },

  // LOGOUT
  logoutBtn: {
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#F5C4B3",
    paddingVertical: 14,
    alignItems: "center",
  },
  logoutText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#D85A30",
  },
});
