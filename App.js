import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";

export default function App() 
{

  return 
  (
    <View style = {styles.appContainer}>
      <View style = {styles.inputContainer}>
        <TextInput placeholder="Your Goal!!!"/>
        <Button title="Add Goal"/>
      </View>
      <View>
        <Text>List Of Goal</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create(
  {
  appContainer: 
  {
    padding: 50,
  },
  inputContainer:
  {
    flexDirection: "row"
  }
});
