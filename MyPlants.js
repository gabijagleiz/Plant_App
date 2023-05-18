import React, { useContext, useState } from 'react';
import { SafeAreaView ,ScrollView,View,Alert, Text, Modal, FlatList, Image, Dimensions, Pressable } from 'react-native';
import { PlantContext } from './plantContext';
import { TouchableOpacity } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width;

const MyPlants = () => {
  const { myPlants } = useContext(PlantContext);
  const {removePlant} = useContext(PlantContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(null);

  const handleImagePress = (plant) => {
    setModalVisible(true);
    setSelectedPlant(plant);
  };

  const handleRemovePlant = () => {
    if (selectedPlant){
        removePlant(selectedPlant);
        Alert.alert('Augalas pašalintas');
        setModalVisible(false);
    }
    // Code to add a plant to MyPlants
  };

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleImagePress(item)} style={styles.lipstickPlantContainer}>
        <Image source={item.image} style={styles.lipstickPlant} />
        <Text style={styles.plantName}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View >
      <Text style={styles.title}>My Plants</Text>
      <View style={styles.row}>
      {myPlants.length === 0 ? (
        <Text style={styles.emptyText}>No plants added yet</Text>
      ) : (
        <FlatList
          data={myPlants}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.flatListContainer}
          numColumns={2}
        />
      )}</View>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          {selectedPlant && (
            <View style={styles.modalContent}>
              <Text style={styles.dataText}>{selectedPlant.name}</Text>
              <Text style={styles.dataText}>{selectedPlant.description}</Text>
              {/* Add more content here */}
            </View>
          )}
          <View style={styles.row}>
            <Pressable style={styles.button} onPress={() => setModalVisible(false)}>
              <Text style={styles.btntext}>Atšaukti</Text>
            </Pressable>
            <View style={styles.space} />
            <Pressable style={styles.button} onPress={handleRemovePlant}>
              <Text style={styles.btntext}>Pašalinti augalą</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View >
  );
};

const styles = {
    container: {
        width: screenWidth / 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
      },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 16,
  },
  flatListContainer: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  lipstickPlantContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  lipstickPlant: {
    width: 200,
    height: 200,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },

  modalContent: {
    backgroundColor: "#DFB79E",      
    padding: 20,
    borderRadius: 10,
    maxWidth: 300,
  },

  titleText:{
    fontSize: 20,
    color: '#F5F5F5',
  },
  
  dataText: {
    fontSize: 15,
    color: '#F5F5F5',
  },

  button: {
    width: "35%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#c58d6b",
  },

  btntext:{
    color: '#ffffff',
    fontSize: 15,
  },

  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
}

export default MyPlants;
