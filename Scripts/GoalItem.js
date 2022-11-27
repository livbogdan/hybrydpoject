import { StyleSheet, View, Text, Pressable,} from "react-native";

function GoalIteam(props) {


    return(
        <Pressable onPress={props.deleteitem.bind(this, props.id)}>
            <View style = {styles.goalStyleContainer}>
                <Text style ={styles.textColor}>{props.text}</Text> 
            </View>
        </Pressable>
      )
}

export default GoalIteam;

const styles = StyleSheet.create ({
    goalStyleContainer:
    {
      margin: 10,
      flexDirection: "column",
      justifyContent: "center",
      borderRadius: 6,
      borderWidth: 5,
      backgroundColor: "black",
      borderColor: "white",
      textShadowColor: "white",
      padding: 10,
            
    },
    textColor:
    {
      color: "white",
    }

})