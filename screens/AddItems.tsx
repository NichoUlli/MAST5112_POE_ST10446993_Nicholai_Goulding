import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddMenu = ({ navigation, addItem }) => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Enter Dish Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Enter Course" value={course} onChangeText={setCourse} />
      <TextInput style={styles.input} placeholder="Enter Description" value={description} onChangeText={setDescription} />
      <TextInput style={styles.input} placeholder="Enter Price" value={price} onChangeText={setPrice} keyboardType="numeric" />
      <Button title="ADD MENU TO HOMEPAGE" onPress={() => {
        addItem({ name, course, price, description });
        navigation.goBack();
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
});

export default AddMenu;