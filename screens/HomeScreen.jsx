import { View, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation, menuItems, removeItem }) => {
  const totalDishes = menuItems.length;

  const courses = menuItems.reduce((acc, item) => {
    if (!acc[item.course]) {
      acc[item.course] = [];
    }
    acc[item.course].push(item.price);
    return acc;
  }, {});

  //calculation of average price
  const averagePrices = Object.keys(courses).map(course => {
    const prices = courses[course];
    const average = prices.reduce((sum, price) => sum + parseFloat(price), 0) / prices.length;
    return { course, average: average.toFixed(2) };
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.totalDishesText}>Total Dishes: {totalDishes}</Text>
        {averagePrices.map((item, index) => (
          <Text key={index} style={styles.averageText}>
            Average Price for {item.course}: R{item.average}
          </Text>
        ))}
      </View>
      {menuItems.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text>{item.course}</Text>
          <Text>{item.price}</Text>
          <Text>{item.description}</Text>
          <TouchableOpacity style={styles.removeButton} onPress={() => removeItem(index)}>
            <Text style={styles.removeButtonText}>Remove Dish</Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddMenu')}>
        <Text style={styles.buttonText}>Add Menu Items</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FilterByCourse')}>
        <Text style={styles.buttonText}>Filter by Course</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  infoContainer: {
    marginBottom: 20,
  },
  totalDishesText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#343a40',
    marginBottom: 10,
  },
  averageText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 5,
  },
  itemContainer: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    position: 'relative',
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
  },
  removeButton: {
    backgroundColor: '#FF0000',
    padding: 8,
    borderRadius: 5,
    position: 'absolute',
    right: 10,
    top: 10,
  },
  removeButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default HomeScreen;