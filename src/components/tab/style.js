import { StyleSheet } from "react-native";
import colors from "../../colors/colors";

export const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.background,
    height: 65,
    paddingBottom: 16,
    paddingTop: 16,
    borderTopColor: colors.primary,
    borderTopWidth: 3,
  },
  tabBarIcon: {
    width: 24,
    height: 24,
    color: colors.textSecondary,
  },
  tabBarBorderIconActive: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: -15,
    top: -15,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  tabBarIconActive: {
    width: 24,
    height: 24,
    color: colors.text,
  },

});
