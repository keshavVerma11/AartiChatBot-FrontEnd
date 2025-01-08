import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MessageBubble = ({ message }) => {
  const isUser = message.isUser;
  return (
    <View
      style={[
        styles.messageBubble,
        isUser ? styles.userBubble : styles.botBubble,
      ]}
    >
      <Text style={[styles.messageText, isUser ? styles.userText : styles.botText]}>
        {message.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageBubble: {
    maxWidth: '75%',
    margin: 8,
    padding: 10,
    borderRadius: 10,
  },
  userBubble: {
    backgroundColor: '#0084ff',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 0,
  },
  botBubble: {
    backgroundColor: '#e5e5ea',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 0,
  },
  messageText: {
    fontSize: 16,
  },
  userText: {
    color: '#fff',
  },
  botText: {
    color: '#000',
  },
});

export default MessageBubble;
