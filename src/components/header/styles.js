import { StyleSheet } from "react-native";
import colors from "../../colors/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: "transparent",
  },
  fitContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "left",
  },
  fit: {
    fontSize: 26,
    fontWeight: "700",
    color: colors.primary,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  life: {
    fontSize: 26,
    fontWeight: "700",
    color: colors.background,
    marginLeft: 6,
    letterSpacing: 1,
    textTransform: "uppercase",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: colors.primary,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 10,
  },
  icon: {
    color: colors.primary,
    transform: [{ scale: 1.3 }],
  },
});
