import { Text, StyleSheet, Pressable, Alert } from "react-native";
function ActivityItem(props) {
  return (
    <Pressable onPress={props.onDelete.bind(this, props.id)}>
      <Text style={styles.displayActivity}>{props.text}</Text>
    </Pressable>
  );
}
export default ActivityItem;
const styles = StyleSheet.create({
  displayActivity: {
    marginVertical: 5,
    padding: 7,
    backgroundColor: "#5e0acc",
    color: "#fff",
    borderRadius: 10,
  },
});
