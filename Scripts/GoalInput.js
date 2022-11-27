import { useState } from "react";
import { StyleSheet, View, Button, TextInput, Text} from "react-native";

function GoalInput(props) {
    const [enteredText, setEnteredText] = useState("");

    function goalInputHandler(enteredText)
    {
      setEnteredText(enteredText);
    }

    function addGoalHandler()
    {
        props.addGoalHandler(enteredText);
        setEnteredText("");
    }

    return (
    <View style = {styles.inputContainer}>
      
        <TextInput 
            style = {styles.textInputContainer} 
            placeholder = "Your Goal!!!" 
            onChangeText={goalInputHandler}
            value={enteredText}/>
  
        <Button title= "Add Goal" onPress={addGoalHandler}/>
    </View>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer:
    {
      
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingBottom: 24,
      borderBottomWidth: 2,
      borderBottomColor: "#cccc",
      
    },
    textInputContainer:
    {
      borderWidth: 1,
      borderColor: "#ccc",
      width: "70%",
      marginRight: 8,
      padding: 5,
    },
})