import { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal, Image} from "react-native";

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
    <Modal 
        //transparent={true}
        visible={props.visible} 
        animationType="slide"  
        >
      <View style = {styles.inputContainer}>
        <Image style={styles.image} source={require("../images/lion.png")} />
        <TextInput 
            style = {styles.textInputContainer} 
            placeholder = "Type Your Goal Here!!!" 
            onChangeText={goalInputHandler}
            value={enteredText}/>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title= "Add" onPress={addGoalHandler}/>
          </View>

          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel}/>
          </View>         
        </View>
        
      </View>
    </Modal>
    )

}

export default GoalInput;

  //#region Style
  const styles = StyleSheet.create({
    inputContainer:
    {
      
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#24232333",
      alignItems: "center",
      paddingTop: 15,
      padding:15,
      
    },
    textInputContainer:
    {
      
      borderWidth: 2,
      borderColor: '#000000',
      borderRadius: 10,
      width: "70%",
      marginRight: 8,
      padding: 8,
    },
    buttonContainer:
    {
      marginTop: 16,
      flexDirection: "row",
      borderColor: "#f91111"
    },
    button:
    {
      width: 100,
      marginHorizontal: 8,
    },
    image:
    {
      width: 100,
      height: 100,
      margin: 20,
    }
  //#endregion

})