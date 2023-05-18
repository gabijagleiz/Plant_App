import React from 'react';
import {ScrollView, View, Text, TouchableOpacity, Modal, Image, Dimensions } from 'react-native';
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
      paddingVertical: 10,
    },

    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },

    lipstickPlantContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      //paddingVertical: 10,
    },

    lipstickPlant: {
      width: 150,
      height: 150,
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
  };

  return (
    <ScrollView>
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
                  <View style={styles.modalContent}>
                    <Text style={styles.dataText}>{selectedPlant.name}</Text>
                    <Text style={styles.dataText}>{selectedPlant.description}</Text>
                    <Text style={styles.dataText}>{selectedPlant.wateringInstructions}</Text>
                    <Text style={styles.dataText}>{selectedPlant.lightRequirements}</Text>
                    {/* Add more content here */}
                  </View>
                )}
              </View>
            </Modal>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default FirstPage;
