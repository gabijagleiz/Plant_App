import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, Button, Pressable} from 'react-native';

function WelcomeScreen({navigation}) {
    return (
        <ImageBackground 
            style={styles.background}
            source={require('./assets/background.jpg')}
        >
            <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('./assets/favicon.png')}/>
            <Text>Water your plants</Text>
            <Pressable style={styles.loginBtn}
                onPress={() => navigation.navigate('SignIn')}>
                <Text style= {styles.btntext}>Registruotis</Text>
            </Pressable>
            <Text></Text>
            <Pressable style={styles.loginBtn}
                onPress={() => navigation.navigate('Login')}>
                <Text style= {styles.btntext}>Prisijungti</Text>
            </Pressable>

            </View>
            
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'black'
        
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'white'
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 80,
        alignItems: 'center'
    },

    loginBtn: {
        width: 200,
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
})
export default WelcomeScreen;