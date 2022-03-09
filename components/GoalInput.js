import React, { useState } from 'react';
import { TextInput, View, Button, StyleSheet, Modal } from 'react-native';
const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.isAddMode} animationType='slide'>
      <View style={styles.goalsContainer}>
        <TextInput
          placeholder='goals'
          style={styles.goals}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.addButton}>
            <Button title='Add' onPress={addGoalHandler} />
          </View>
          <View style={styles.cancelButton}>
            <Button title='Cancel' color='red' onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  goalsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goals: { width: '80%', borderColor: 'black', borderWidth: 1, padding: 10 },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  addButton: { marginLeft: 10 },
  cancelButton: { marginRight: 10 },
});

export default GoalInput;
