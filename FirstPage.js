import React from 'react';
import { View, Text, TouchableOpacity, Modal, Image, Dimensions } from 'react-native';
import plantData from './plantsData/';

const FirstPage = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedPlant, setSelectedPlant] = React.useState(null);

  const handleImagePress = (plant) => {
    setModalVisible(!modalVisible);
    setSelectedPlant(plant);
  };

  const screenWidth = Dimensions.get('window').width;

  const styles = {
    container: {
      width: screenWidth / 2,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 20,
    },

    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },

    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    lipstickPlantContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 20,
    },

    lipstickPlant: {
      width: 150,
      height: 150,
    },
  };

  return (
    <View style={styles.row}>
      {plantData.map((plant) => (
        <View style={styles.container} key={plant.id}>
          <TouchableOpacity onPress={() => handleImagePress(plant)} style={styles.lipstickPlantContainer}>
            <Image source={plant.image} style={styles.lipstickPlant} />
            <Text>{plant.name}</Text>
          </TouchableOpacity>

          <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              {selectedPlant && (
                <View>
                  <Text>{selectedPlant.name}</Text>
                  <Text>{selectedPlant.description}</Text>
                  <Text>{selectedPlant.wateringInstructions}</Text>
                  <Text>{selectedPlant.lightRequirements}</Text>
                  {/* Add more content here */}
                </View>
              )}
            </View>
          </Modal>
        </View>
      ))}
    </View>
  );
};

export default FirstPage;
