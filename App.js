import { useState } from "react";
import { StyleSheet, View, FlatList, Button, Alert } from "react-native";
import GoalInput from "./assets/Scripts/GoalInput";
import GoalItem from "./assets/Scripts/GoalItem";

export default function App() {

  //#region Const
  const[modalIsVIsable, setModalVisible] = useState(false)

  const [goals, setGoals] = useState([]);

  //#endregion

  //#region Function
  function addGoalHandler(enteredText)
  {
    setGoals(currentGoal => [
      ...currentGoal,
      { text: enteredText, id: Math.random().toString()}]);
    cancelAddGoalHandler();
  }

  function deleteGoalHandler(id)
  {
    setGoals(currentGoal => {
      return currentGoal.filter((goal)=> goal.id !== id);
    });
  }

  function startAddGoalHandler()
  {
    setModalVisible(true)
  }

  function cancelAddGoalHandler() 
  {
    setModalVisible(false)    
  }

  //#endregion

return(
  <View style ={styles.appContainer}>
      <Button 
        title="Add New Goal" 
        color="#000000" 
        wight="60%"
        
        onPress={startAddGoalHandler}/>
      <GoalInput 
        visible={modalIsVIsable} 
        addGoalHandler={addGoalHandler}
        onCancel={cancelAddGoalHandler}
      />
    <View style={styles.goalContainer }>
      <FlatList 
        data={goals} // items
        renderItem = {itemData => {
        return(
          
        <GoalItem 
          text = {itemData.item.text} //Give name of item
          id = {itemData.item.id} 
          deleteItem={deleteGoalHandler} //Deleted item
          />
        );
      }}
      keyExtractor={(item, index) => {
        return item.id;}}/>

    </View>    
  </View>
);
}

  //#region Style
  const styles = StyleSheet.create(
  {
  appContainer: 
  {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal:16,
    backgroundColor: "#8d8d8d",   
    
  },
  goalContainer:
  {
    flex: 4,
    backgroundColor: "#454545",
    padding: 10,
  },
  button:
  {
    width: 100,
    marginHorizontal: 8,
  }
  //#endregion
  
});
