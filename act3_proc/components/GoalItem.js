import { View, Text, StyleSheet } from 'react-native'; 
import React, { useState } from 'react';

export default function GoalItem(props){
    return (
        <View style={styles.goalItem}>
          <Text style={styles.goalText}>{props.text}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    goalItem: {
        padding: 15,
        backgroundColor: '#B3AEA4',
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 14,
        marginRight: 50,
      },
      goalText: {
        fontSize: 12,
        color: '#333',
        fontSize: 16,
      }
});