import { NavigationContainer } from "@react-navigation/native";

import TabRoutes from "./src/routes/tab"; 


export default function App() {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
}
