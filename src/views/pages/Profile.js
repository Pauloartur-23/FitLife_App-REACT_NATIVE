import { Button, View, Text } from "react-native";
import { useLogged } from "../login/state/logged";

export default function Profile() {
  const { logoutUser } = useLogged();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Profile</Text>

      <Button title="Sair" onPress={logoutUser} />
    </View>
  );
}
