import { StyleSheet, View, Text, Pressable,} from "react-native";

function GoalItem(props) {

    return(
        
            <View style = {styles.goalStyleContainer}>
              <Pressable
                android_ripple={{color: "#efefefa7"}} //color effect when press button ONLY ANDROID
                style = {(pressData)=>pressData && styles.itemPressed} //Press button Effect for iOS an Android
                onPress={props.deleteItem.bind(this, props.id)}                
                >
                <Text style ={styles.textColor}>{props.text}</Text> 
              </Pressable>
            </View>
    
      )
}

export default GoalItem;

  //#region Style
  const styles = StyleSheet.create ({

    goalStyleContainer:
    {
      margin: 10,
      flexDirection: "column",
      justifyContent: "center",
      borderRadius: 10,
      borderWidth: 3,
      backgroundColor: "#00000078",
      borderColor: "#cccccc",
      textShadowColor: '#00000080',
      padding: 10,            
    },
    
    textColor:
    {
      color: "#ffffff",
    },
    itemPressed:
    {
      opacity: 0.5,
    }
    //#endregion

})