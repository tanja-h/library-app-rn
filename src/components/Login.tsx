import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView, StatusBar, Image, TouchableOpacity } from "react-native";

const isEmpty = (text: string) => {
   return text.length === 0;
}

export const Login: React.FC = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   const loginUser = () => {
      if (isEmpty(username)) {
         console.log('Username is empty!');
         return;
      }

      if (isEmpty(password)) {
         console.log('Password is empty!');
         return;
      }

      console.log("succesfuly login")
   }

   return (
      <SafeAreaView style={styles.mainContainer}>
         <StatusBar barStyle='dark-content' />

         <View style={styles.container}>
            <Image source={{ uri: 'https://picsum.photos/id/24/350' }} style={styles.image} />

            <Text style={styles.title}>Username</Text>
            <TextInput value={username} onChangeText={setUsername} style={styles.input} />

            <Text style={styles.title}>Password</Text>
            <TextInput value={password} onChangeText={setPassword} style={styles.input} secureTextEntry />

            <TouchableOpacity style={styles.buttonContainer} onPress={loginUser}>
               <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   );
};

const borderRadius = 4;

const styles = StyleSheet.create({
   mainContainer: {
      flex: 1,
      backgroundColor: '#e89189',
   },
   container: {
      flex: 1,
      paddingHorizontal: 32,
      alignItems: 'center',
      justifyContent: 'center'
   },
   image: {
      width: 250,
      height: 200,
      marginBottom: 32,
      borderRadius,
      borderWidth: 1,
   },
   input: {
      width: '100%',
      height: 35,
      paddingHorizontal: 8,
      marginTop: 18,
      backgroundColor: "#fff",
      borderRadius,
      borderWidth: 1,
   },
   title: {
      fontSize: 24,
      fontWeight: '600',
      marginTop: 16,
      letterSpacing: 1
   },
   buttonContainer: {
      width: 100,
      height: 50,
      backgroundColor: '#faa8a0',
      marginTop: 24,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius,
      borderWidth: 1
   },
   buttonText: {
      letterSpacing: 1,
      fontWeight: '500',
   }
});
