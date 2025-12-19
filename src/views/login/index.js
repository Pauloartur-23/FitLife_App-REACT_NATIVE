import { Button, View, Text } from "react-native";

export function Login({ setLogged }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>
      <Button
        title="Entrar"
        onPress={() => setLogged(true)}
      />
    </View>
  );
}
