import { StyleSheet } from "react-native";
import colors from "../../../colors/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundWhite,
  },

  card: {
    width: "88%",
    backgroundColor: colors.cardBackgroundWhite,
    padding: 25,
    borderRadius: 12,
    elevation: 8,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },

  info: {
    marginBottom: 20,
  },

  label: {
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 6,
  },

  value: {
    marginBottom: 8,
    fontSize: 16,
    color: colors.textSecondary,
  },

  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: colors.inputBorder,
    color: colors.textSecondary,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: colors.inputBackgroundWhite,
  },

  editButton: {
    backgroundColor: colors.buttonDisabled,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  logoutButton: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: colors.buttonText,
    fontWeight: "bold",
    fontSize: 16,
  },

  logoutText: {
    color: colors.buttonText,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;
