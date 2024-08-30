import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  Button,
  Modal,
} from "react-native";
import React, { useState } from "react";
import ActivityItem from "./components/ActivityItem";
import ActivityInput from "./components/ActivityInput";

export default function App() {
  const [isModalVisible , setIsModalVisible] = useState(false);
  const [activities, setActivities] = useState([]);
  const handleAdd = (enteredText) => {
    if(!enteredText){
      Alert.alert("You need to write an activity");
    }
    else{
      setActivities((currentActivity) => 
        [...currentActivity,{ text: enteredText, id: Math.random().toString()}]);
    }
  };
  const deleteActivity =(id)=>{
    setActivities(currentActivity=>{
      return currentActivity.filter((activity)=> activity.id !==id);
    })
  }
  function handleModalVisible(){
    setIsModalVisible(true)
  }
  return (
    <View style={styles.appContainer}>
      <Button title="Add Activity" onPress={handleModalVisible}/>
      {isModalVisible && <Modal>
      <ActivityInput onAdd={handleAdd}/>
      <Button/>
      </Modal>}
      
      <View style={styles.activityContainer}>
        <FlatList
          data={activities}
          renderItem={(itemData) => {
            return <ActivityItem text={itemData.item.text} onDeleteItem={deleteActivity} id={itemData.item.id} onDelete={deleteActivity}/>;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },

});
