import { Button, View, Text } from "react-native";

export default function Profile({ setLogged }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Profile</Text>
      <Button
        title="Sair"
        onPress={() => setLogged(false)}
      />
    </View>
  );
}
