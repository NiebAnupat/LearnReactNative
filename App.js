import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import uuid from 'uuid-random';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [books, setBooks] = useState([
    {id: uuid(), title: 'Harry Potter', author: 'J.K. Rowling'},
    {id: uuid(), title: 'The Lord of the Rings', author: 'J.R.R. Tolkien'},
    {id: uuid(), title: 'The Hobbit', author: 'J.R.R. Tolkien'},
    {id: uuid(), title: 'The Catcher in the Rye', author: 'J.D. Salinger'},
    {id: uuid(), title: 'The Grapes of Wrath', author: 'John Steinbeck'},
    {id: uuid(), title: 'The Great Gatsby', author: 'F. Scott Fitzgerald'},
  ]);

  const deleteBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };

  const addBook = text => {
    if(!!text) {
    setBooks([...books, {id: uuid(), title: text, author: 'Unknown'}]);}
    else {
      Alert.alert(`warning`,'Please enter a book title');
    }
  };

  return (
    <View style={styles.container}>
      <Header title="My Book List" />
      <AddItem addBook={addBook} />
      <FlatList
        data={books}
        renderItem={({item}) => (
          <ListItem book={item} deleteBook={deleteBook} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
