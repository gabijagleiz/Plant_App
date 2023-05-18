import React, { useEffect,useContext  } from 'react';
import {ScrollView, View, Text, TouchableOpacity, Modal, Image, Dimensions,Pressable,Alert } from 'react-native';
import plantData from './plantsData/';
import { useNavigation,useIsFocused  } from '@react-navigation/native';
import { PlantContext } from './plantContext';

const FirstPage = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedPlant, setSelectedPlant] = React.useState(null);

  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { addPlant } = useContext(PlantContext);

  const handleImagePress = (plant) => {
    setModalVisible(!modalVisible);
    setSelectedPlant(plant);
  };

  const handleAddPlant = () => {
    if (selectedPlant) {
      addPlant(selectedPlant); // Add the selected plant to the context  
      Alert.alert('Augalas pridėtas');
      setModalVisible(false);
    }
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
  };

  useEffect(() => {
    if (!isFocused) {
      setModalVisible(false); // Reset modalVisible state when component is not focused
    }
  }, [isFocused]);

  return (
    <ScrollView>
      <Pressable style={styles.button} onPress={() => navigation.navigate('MyPlants')}>
          <Text style= {styles.btntext}>Mano augalai</Text>
      </Pressable>
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
                <View style={styles.row}>
                  <Pressable style={styles.button} onPress={() => setModalVisible(false)}>
                    <Text style= {styles.btntext}>Atšaukti</Text>
                  </Pressable>
                  <View style={styles.space} />
                  <Pressable style={styles.button} onPress={handleAddPlant}>
                    <Text style= {styles.btntext}>Pridėti augalą</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default FirstPage;
