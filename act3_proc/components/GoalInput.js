import { View, TextInput, Button, StyleSheet } from 'react-native'; 
import React, { useState } from 'react';

export default function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      };
    
    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');

    }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Your Course Goal'
        style={styles.inputText}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title='Add Goal' color='#CBBAB0' onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#282321',
    },
    inputText: {
        borderWidth: 2,
        color: 'black',                         //edit
        width: '70%',
        marginRight: 12,
        padding: 13,
        borderColor: '#61564A',
        borderRadius: 8,
        backgroundColor: '#B3AEA4',
        fontSize: 16,
      }
});