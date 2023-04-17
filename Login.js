import { StatusBar } from "expo-status-bar"
import React, { useState } from "react";
import { Pressable } from "react-native";
import {StyleSheet,Text,View,Image,TextInput,Button,TouchableOpacity} from "react-native";
//import { validateEmail } from './helpers/validation';

export const validateEmail = (email) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};


export default function Login({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (

    <View style={styles.container}>

      <StatusBar style="auto" />
      <Text style={styles.title}>Prisijungimas</Text>

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
          placeholder="Slaptažodis."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />

      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Pamiršai slaptažodį?</Text>
      </TouchableOpacity>
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
        <Text style= {styles.btntext}>Prisijungti</Text>
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

  forgot_button: {
    height: 30,
    marginBottom: 30,

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