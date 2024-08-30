import { View , TextInput , Button ,StyleSheet ,Pressable, Alert} from "react-native";
import { useState } from "react";
function ActivityInput(props) {
    const [text, setText] = useState("");
    const handleText = (enteredText) => {
            setText(enteredText);
      };
    function addGoalHandler(){
        props.onAdd(text);
        setText("");
    }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Write your activity"
        style={styles.inputField}
        onChangeText={handleText}
        value={text}
      />
      <Button title="Add" onPress={addGoalHandler} />
    </View>
  );
}
export default ActivityInput;
const styles = StyleSheet.create({
    inputField: {
        padding: 8,
        borderBottomWidth: 1,
        borderColor: "#cccccc",
        width: "75%",
        paddingHorizontal: 8,
      },
      inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 30,
        paddingBottom: 40,
        borderBottomWidth: 2,
        borderColor: "#cccccc",
        alignItems: "center",
      },
})
