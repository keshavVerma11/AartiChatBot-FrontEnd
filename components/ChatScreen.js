import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import MessageBubble from './MessageBubble';
import InputBar from './InputBar';

const ChatScreen = () => {
  // Initialize messages with a welcome message from the bot
  const [messages, setMessages] = useState([
    {
      id: '0',
      text: 'Hey my name is Aarti! Here to help you find the resources you need! What do you have on your mind?',
      isUser: false,
    },
  ]);

  const handleSend = (text) => {
    if (text.length > 0) {
      // Add the user's message to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: (prevMessages.length + 1).toString(), text, isUser: true },
      ]);

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            id: (prevMessages.length + 1).toString(),
            text: 'Here are some resources you can refer to...',
            isUser: false,
          },
        ]);
      }, 500); // Shortened the delay for a snappier response
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ ios: 'padding', android: null })}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
    >
      <FlatList
        data={messages}
        renderItem={({ item }) => <MessageBubble message={item} />}
        keyExtractor={(item) => item.id}
        //inverted
        contentContainerStyle={styles.contentContainer}
      />
      <InputBar onSend={handleSend} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});

export default ChatScreen;
