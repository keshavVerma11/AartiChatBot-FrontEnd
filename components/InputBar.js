import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const InputBar = ({ onSend }) => {
  const [text, setText] = useState('');

  const handleSendPress = () => {
    if (text.trim().length > 0) {
      onSend(text.trim());
      setText('');
    }
  };

  return (
    <View style={styles.inputBar}>
      <TextInput
        style={styles.textBox}
        value={text}
        onChangeText={(input) => setText(input)}
        placeholder="Type a message..."
        onSubmitEditing={handleSendPress}
      />
      <TouchableOpacity onPress={handleSendPress} style={styles.sendButton}>
        <Ionicons
          name="send"
          size={24}
          color="#0084ff"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBar: {
    flexDirection: 'row',
    padding: 8,
    borderTopWidth: 1,
    borderColor: '#e5e5ea',
    backgroundColor: '#fff',
  },
  textBox: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
  },
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
});

export default InputBar;
