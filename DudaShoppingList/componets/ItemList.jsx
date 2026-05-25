import React from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ItemList({ item }) {
  return (
    <View style={styles.ItemList}>
      <View style={{ flex: 1 }}>
       <Text>{item.name}</Text>
    </View>

     {!item?.bougth ? (
      <TouchableOpacity 
      style={styles.actionIcon}
      onPress={{} => {}}
      >
        <Ionicons name='bag-check-outline' size={24} color='#fff'/>
      </TouchableOpacity>
     ) : (
      <TouchableOpacity>
        style={styles.actionIcon}
      >
     )}

    </View>
  )
}

const styles = StyleSheet.create({
  itemList: {
    padding: 15,
    elevation: 12,
    borderRadius: 7,
    backgroundColor: '#000000c0',
    borderWidth: 2,
    borderColor: 'White',
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  itemName: {
    color: '#fff',
    fontSize: 24
  },
  actionIcon: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    borderRadius: 20,
    backgroundColor: 'darkgreen',
  }
})