import { View, Text, Pressable } from "react-native";
import { styles } from "./styles"; 
import { Ionicons } from "@expo/vector-icons";

export function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.fitContainer}>
                <Text style={styles.fit}>Fit</Text>
            <Text style={styles.life}>Life</Text>
            </View>
            <Pressable onPress={() => console.log("Icon pressed")}>
                    <Ionicons style={styles.icon} name={'settings-outline'} size={24}  />
             </Pressable>
        </View>
    );
}
