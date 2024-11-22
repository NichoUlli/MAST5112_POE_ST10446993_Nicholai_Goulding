import { useState } from 'react';
import { View, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';

const FilterByCourse = ({ navigation, menuItems }) => {
  const [filter, setFilter] = useState('');

  const filteredItems = menuItems.filter(item => item.course === filter);
  //selecting a button to view detailed courses

  return (
    <ScrollView style={styles.containerButton}>
      <TouchableOpacity style={styles.button} onPress={() => setFilter('Starter')}>
        <Text style={styles.buttonText}>Starters</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setFilter('Main')}>
        <Text style={styles.buttonText}>Mains</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setFilter('Dessert')}>
        <Text style={styles.buttonText}>Desserts</Text>
      </TouchableOpacity>
      
      <View>
        {filteredItems.map((item, index) => (
          <View key={index} style={styles.items}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text>{item.course}</Text>
            <Text>{item.price}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    flex: 1,
    padding: 16,
},
  items: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
},
  itemName: {
    fontWeight: 'bold',
    fontSize: 18,
},
  button: {
    backgroundColor: '#6200EE',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
},
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
}
});

export default FilterByCourse;