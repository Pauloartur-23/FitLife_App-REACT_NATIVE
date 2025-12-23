import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useLogged } from "../../login/state/logged";
import styles from "./styles";

export default function Profile() {
  const { getLoggedUser, logoutUser, updateLoggedUser } = useLogged();
  const user = getLoggedUser();

  const [editing, setEditing] = useState(false);

  const [name, setName] = useState(user?.name || "");
  const [birth, setBirth] = useState(user?.birth || "");
  const [gender, setGender] = useState(user?.gender || "");
  const [weight, setWeight] = useState(String(user?.weight || ""));
  const [height, setHeight] = useState(String(user?.height || ""));

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 18 }}>Nenhum usuário logado</Text>
      </View>
    );
  }

  function handleSave() {
    updateLoggedUser({
      name,
      birth,
      gender,
      weight: Number(weight),
      height: Number(height),
    });

    alert("Perfil atualizado com sucesso!");
    setEditing(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.title}>
          {editing ? "Editar Perfil" : "Perfil"}
        </Text>

        {!editing ? (
          <>
            <View style={styles.info}>
              <Text style={styles.label}>Nome:</Text>
              <Text style={styles.value}>{user.name}</Text>

              <Text style={styles.label}>Email:</Text>
              <Text style={styles.value}>{user.email}</Text>

              <Text style={styles.label}>Data de Nascimento:</Text>
              <Text style={styles.value}>{user.birth}</Text>

              <Text style={styles.label}>Gênero:</Text>
              <Text style={styles.value}>{user.gender}</Text>

              <Text style={styles.label}>Peso:</Text>
              <Text style={styles.value}>{user.weight} kg</Text>

              <Text style={styles.label}>Altura:</Text>
              <Text style={styles.value}>{user.height} m</Text>
            </View>

            <TouchableOpacity
              style={styles.editButton}
              onPress={() => setEditing(true)}
            >
              <Text style={styles.buttonText}>Editar Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutButton} onPress={logoutUser}>
              <Text style={styles.logoutText}>Sair</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.label}>Nome</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} />

            <Text style={styles.label}>Data de Nascimento</Text>
            <TextInput
              style={styles.input}
              value={birth}
              onChangeText={setBirth}
            />

            <Text style={styles.label}>Gênero</Text>
            <TextInput
              style={styles.input}
              value={gender}
              onChangeText={setGender}
            />

            <Text style={styles.label}>Peso (kg)</Text>
            <TextInput
              style={styles.input}
              value={weight}
              onChangeText={setWeight}
              keyboardType="numeric"
            />

            <Text style={styles.label}>Altura (m)</Text>
            <TextInput
              style={styles.input}
              value={height}
              onChangeText={setHeight}
              keyboardType="numeric"
            />

            <TouchableOpacity style={styles.editButton} onPress={handleSave}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.logoutButton}
              onPress={() => setEditing(false)}
            >
              <Text style={styles.logoutText}>Cancelar</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}
