import { useState } from "react";
import { Login } from "../login";
import { Register } from "../register";
import { View } from "react-native";

export function LoginView() {
  const [login, setlogin] = useState(true);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {login == true ? (
        <Login login={login} setlogin={setlogin} />
      ) : (
        <Register login={login} setlogin={setlogin} />
      )}
    </View>
  );
}
