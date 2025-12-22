import { StyleSheet } from "react-native";
import colors from "../../../colors/colors";

export const styles = StyleSheet.create({
  form: {
    maxWidth: 400,
    width: '100%',
    padding: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
  },
  input: {
    width: 320,
    backgroundColor: colors.inputBackground,
    color: colors.inputText,
    borderColor: colors.inputBorder,
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 18,
    fontSize: 16,
    color: colors.text,
  },
  inputFocused: {
    borderColor: colors.primary,
  },
  buttonSubmit: {
    width: 320,
    backgroundColor: colors.primary,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: 18,
    fontWeight: "700",
  },
  title: {
    color: colors.primary,
    fontSize: 48,
    fontWeight: "800",
    textAlign: "center",
  },
  text: {
    color: colors.text,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "100",
  },
  textSecondary: {
    color: colors.textSecondary,
    fontSize: 12,
    textAlign: "center",
    fontWeight: "100",
  },
  link: {
    color: colors.primary,
    fontSize: 14,
    textAlign: "center",
    fontWeight: "700",
    textDecorationLine: "underline",
  },
});
