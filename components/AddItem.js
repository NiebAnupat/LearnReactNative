import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addBook}) => {
  const [text, setText] = useState('');

  const onChange = value => setText(value);

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add Book...."
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.button} onPress={() => addBook(text)}>
        <Text style={styles.buttonText}>
          <Icon
            style={{
              marginRight: 20,
            }}
            name="plus"
            size={15}
          />
          Add
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: 'green',
    padding: 9,
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
