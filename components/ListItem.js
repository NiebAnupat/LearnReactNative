import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon  from 'react-native-vector-icons/dist/FontAwesome';
const ListItem = ({book,deleteBook}) => {
  const {id, title, author} = book;
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{title}</Text>
        <Icon name='remove' size={20} color='firebrick' onPress={()=>deleteBook(id)}/>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
      padding: 15,
      backgroundColor: '#f8f8f8',
      borderBottomWidth: 1,
      borderColor: '#eee',
  },
  listItemView: {
      flexDirection: 'row',
      justifyContent: 'space-between',

  },
  listItemText: {
      fontSize: 15,
      color: '#222',
  },
});

export default ListItem;
