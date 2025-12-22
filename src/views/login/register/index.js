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
import { styles } from "../login/styles";
import colors from "../../../colors/colors";
import { Ionicons } from "@expo/vector-icons";

export function Register({ login, setlogin }) {
  const { registerUser, loginUser } = useLogged();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [focused, setFocused] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [error, setError] = useState("");

  function handleRegister() {
    setError("");

    if (!name || !email || !password || !confirm)
      return setError("Preencha todos os campos");

    if (password !== confirm)
      return setError("As senhas não coincidem");

    try {
      registerUser(name, email, password); 
      loginUser(email, password);        
    } catch (err) {
      setlogin(!login)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.title}>
            Crie sua conta!
            <Text style={styles.text}> É rápido e fácil</Text>
          </Text>

          {error.length > 0 && (
            <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>
          )}

          <TextInput
            placeholder="Nome completo"
            placeholderTextColor={colors.textSecondary}
            style={[styles.input, focused === "name" && styles.inputFocused]}
            value={name}
            onChangeText={setName}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused("")}
          />

          <TextInput
            placeholder="Email"
            autoCorrect={false}
            placeholderTextColor={colors.textSecondary}
            style={[styles.input, focused === "email" && styles.inputFocused]}
            value={email}
            onChangeText={setEmail}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused("")}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <View style={{ width: "100%", position: "relative" }}>
            <TextInput
              placeholder="Senha"
              placeholderTextColor={colors.textSecondary}
              style={[styles.input, focused === "password" && styles.inputFocused]}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              onFocus={() => setFocused("password")}
              onBlur={() => setFocused("")}
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

          <View style={{ width: "100%", position: "relative" }}>
            <TextInput
              placeholder="Confirmar senha"
              placeholderTextColor={colors.textSecondary}
              style={[styles.input, focused === "confirm" && styles.inputFocused]}
              value={confirm}
              onChangeText={setConfirm}
              secureTextEntry={!showConfirm}
              onFocus={() => setFocused("confirm")}
              onBlur={() => setFocused("")}
            />
            <Pressable
              style={{ position: "absolute", right: 15, top: 14 }}
              onPress={() => setShowConfirm(!showConfirm)}
            >
              <Ionicons
                name={showConfirm ? "eye" : "eye-off"}
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
            onPress={handleRegister}
          >
            <Text style={styles.buttonText}>Cadastrar</Text>
          </Pressable>

          <Text style={styles.textSecondary}>
            Já tem uma conta?
            <Text style={styles.link} onPress={() => setlogin(!login)}>
              Entrar
            </Text>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
