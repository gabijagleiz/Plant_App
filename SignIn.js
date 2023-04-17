import { StatusBar } from "expo-status-bar"
import React, { useState } from "react";
import {StyleSheet,Text,View,Image,TextInput,Button,TouchableOpacity,Pressable} from "react-native";

export const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };


export default function Signup({ navigation }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    // Perform input validation here
    // If input is valid, create a new user object and save it to the database using a web API call
    // If input is invalid, display an error message to the user
    // Redirect the user to the main screen after successful sign-up
    navigation.navigate('MainScreen');
  }

  return (

    <View style={styles.container}>

      <StatusBar style="auto" />
      <Text style={styles.title}>Registracija</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Naudotojo vardas"
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Elektroninis paštas"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Slaptažodis"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <Pressable style={styles.loginBtn}
        onPress={() => {
          if (!validateEmail(email)) {
            alert("Please enter a valid email address");
          } else if (password.length < 6) {
            alert("Password must be at least 6 characters long");
          } else {
            navigation.navigate("FirstPage");
          }
        }}>
        <Text style= {styles.btntext}>Registruotis</Text>
        </Pressable>

    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  title: {
    color: "#418B5B",
    fontSize: 30,
    margin: 30
  },

  inputView: {
    backgroundColor: "#AAD5A3",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  signupBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
   
  },

  loginBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#DFB79E",
  },

  btntext:{
    fontSize:20,
    color: '#F5F5F5'
  }

});