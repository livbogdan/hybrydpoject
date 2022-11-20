import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";

export default function App() 
{
  let age = 30;
  let exampleFunction = () => 
  {
    console.log("saved function 3");
  };
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: 200, backgroundColor: "green" }}>
        <View style={{ width: "20%", height: "20%", backgroundColor: "yellow" }} />
      </View>
      <Text>Hello There!</Text>
      <Text style={{ color: "red", fontWeight: "bold" }}>My age is {age}</Text>
      <Button
        title={"Press me to use a function stored in a variable"}
        onPress={exampleFunction}
      />
      <Button
        title={"Press me to run an arrow function"}
        onPress={() => {
          console.log("Hello there");
        }}
      />
      <Button
        title={"Example of WRONG way (don't **call** the function inline)"}
        onPress={exampleFunction()}
      />
      <TextInput
        placeholder="Enter something here"
        onChangeText={(newText) => {
          console.log(newText);
        }}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    backgroundColor: "fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
