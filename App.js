import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";

import TabRouter from "./src/components/tab";
import { LoginView } from "./src/views/login/View";
import colors from "./src/colors/colors";
import { Header } from "./src/components/header";

import { LoggedProvider, useLogged } from "./src/views/login/state/logged";

function TabOrLogin() {
  const { getLoggedUser } = useLogged();
  const user = getLoggedUser();

  return user ? <TabRouter /> : <LoginView />;
}

export default function App() {
  return (
    <LoggedProvider>
      <NavigationContainer>
        <View style={{ flex: 1, backgroundColor: colors.background }}>
          <Header />
          <TabOrLogin />
        </View>
      </NavigationContainer>
    </LoggedProvider>
  );
}
