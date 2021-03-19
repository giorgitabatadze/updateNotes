// import React from "react";
// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
// import HomeScreen from "./src/screens/HomeScreen";
// import ComponentsScreen from "./src/screens/ComponentsScreen";
// import Notes from "./src/screens/Notes";
// import secondScreen from "./src/screens/secondScreen";
// import AddNotes from "./src/screens/AddNotes";

// import SideBar from "./src/screens/SideBar";

// const navigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Components: ComponentsScreen,
//     Notes: Notes,
//     Addnote: AddNotes,
//     ViewNote: ViewNote,
//     SideBar: SideBar,
//   },
//   {
//     initialRouteName: "Components",
//     headerMode: "none",
//     mode: "modal",
//   }
// );
//
// const Stack = createStackNavigator();
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.navigator>
//         <Stack.Screen name="ComponentsScreen" component={ComponentsScreen} />
//         <Stack.Screen name="AddNotes" component={AddNotes} />
//       </Stack.navigator>
//     </NavigationContainer>
//   );
// };
//
// export default App;

// import { createAppContainer } from "react-navigation";
// import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import Notes from "./src/screens/Notes";
import { View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import ViewNote from "./src/screens/ViewNote";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerContent() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Drawer content</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {/*<Stack.Navigator>*/}
      <Stack.Navigator>
        <Stack.Screen
          name="ComponentsScreen"
          component={ComponentsScreen}
          options={{ title: "" }}
        />
        <Stack.Screen name="Notes" component={Notes} options={{ title: "" }} />
        <Stack.Screen
          name="ViewNote"
          component={ViewNote}
          options={{ title: "VIEW NOTES" }}
        />
      </Stack.Navigator>

      {/*  <Drawer.Navigator DrawerContent={() => <DrawerContent />}>*/}
      {/*    <Drawer.Screen*/}
      {/*      name="ComponentsScreen"*/}
      {/*      component={ComponentsScreen}*/}
      {/*      options={{ title: "Homeee" }}*/}
      {/*    />*/}
      {/*  </Drawer.Navigator>*/}
      {/*</Stack.Navigator>*/}
    </NavigationContainer>
  );
}

// <NavigationContainer>
// <Drawer.Navigator>
// <Drawer.screen name="ComponentsScreen" component={ComponentsScreen} />
// <Drawer.Screen name="Notes" component={Notes} />
// </Drawer.Navigator>
// </NavigationContainer>
