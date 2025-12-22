import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";
import { useLogged } from "../state/logged";
import { styles } from "./styles";
import colors from "../../../colors/colors";
import { Ionicons } from "@expo/vector-icons";

export function Login({ login, setlogin }) {
  const { loginUser } = useLogged();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");

  function handleLogin() {
    try {
      loginUser(email, password); 
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <View style={styles.form}>
          <Text style={styles.title}>
            Bem vindo!
            <Text style={styles.text}>
              Entre para continuar sua experiência!
            </Text>
          </Text>

          {error.length > 0 && (
            <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>
          )}

          <TextInput
            placeholder="Email"
            autoCorrect={false}
            placeholderTextColor={colors.textSecondary}
            style={[styles.input, isFocusedEmail && styles.inputFocused]}
            value={email}
            onChangeText={setEmail}
            onFocus={() => setIsFocusedEmail(true)}
            onBlur={() => setIsFocusedEmail(false)}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <View style={{ width: "100%", position: "relative" }}>
            <TextInput
              placeholder="Senha"
              placeholderTextColor={colors.textSecondary}
              style={[styles.input, isFocusedPassword && styles.inputFocused]}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              onFocus={() => setIsFocusedPassword(true)}
              onBlur={() => setIsFocusedPassword(false)}
            />

            <Pressable
              style={{ position: "absolute", right: 15, top: 14 }}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons
                name={showPassword ? "eye" : "eye-off"}
                size={24}
                color={colors.textSecondary}
              />
            </Pressable>
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.buttonSubmit,
              pressed && { opacity: 0.7, transform: [{ scale: 0.98 }] },
            ]}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </Pressable>

          <Text style={styles.textSecondary}>
            Ainda não tem conta?
            <Text style={styles.link} onPress={() => setlogin(!login)}>
              Cadastre-se
            </Text>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
