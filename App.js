import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalInput from "./Scripts/GoalInput";
import GoalIteam from "./Scripts/GoalItem";

export default function App() {

  const [goals, setGoals] = useState([]);

  function addGoalHandler(enteredText)
  {
    setGoals(currentGoal => [...currentGoal, { text: enteredText, id: Math.random().toString()}]);
  }

  function deleteGoalHandler(id)
  {
    setGoals(currentGoal => {
      return currentGoal.filter((goal)=> goal.id !== id);
    });
  }

return(
  <View style ={styles.appContainer}>
      <GoalInput 
      addGoalHandler={addGoalHandler} 
      />
    <View style={styles.goalContainer}>
      <FlatList 
      data={goals} 
      renderItem = {itemData => {
        return (
        <GoalIteam 
        text = {itemData.item.text}
        id = {itemData.item.id}
        deleteitem={deleteGoalHandler}/>

        );
      }}
      keyExtractor={(item, index) => {
        return item.id;}}/>

    </View>

    
  </View>
);
}

const styles = StyleSheet.create(
  {
  appContainer: 
  {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal:16,
    backgroundColor: "gray"
  },
  goalContainer:
  {
    flex: 4,
  },
});
