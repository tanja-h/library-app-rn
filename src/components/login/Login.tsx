import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView, StatusBar, Image, TouchableOpacity } from "react-native";
import { LoginInfoModal } from "./LoginInfoModal";
import { Color } from "../../styles/Colors";
import { borderRadius } from "../../styles/constants";
import { RouteName } from "../../utils/routeUtils";
import { NavigationOnly, NavigationProps } from "../../utils/navigationTypeUtils"

const isEmpty = (text: string) => {
   return text.length === 0;
}

export const Login = ({ navigation }: NavigationProps) => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [isErrorModalDisplayed, setIsErrorModalDisplayed] = useState(false);
   const [isSuccessModalDisplayed, setIsSuccessModalDisplayed] = useState(false);

   const loginUser = () => {
      if (isEmpty(username)) {
         console.log('Username is empty!');
         setIsErrorModalDisplayed(true);
         return;
      }

      if (isEmpty(password)) {
         console.log('Password is empty!');
         setIsErrorModalDisplayed(true);
         return;
      }

      console.log("succesfuly login")
      setIsSuccessModalDisplayed(true);
   }

   const goToMyBooks = () => {
      setIsSuccessModalDisplayed(false);
      navigation.navigate(RouteName.HOME, { screen: RouteName.MY_BOOKS });
   }
   return (
      <SafeAreaView style={styles.mainContainer}>
         <StatusBar barStyle='dark-content' />

         <View style={styles.container}>
            <Image source={{ uri: 'https://picsum.photos/id/24/350' }} style={styles.image} />

            <Text style={styles.title}>Username</Text>
            <TextInput value={username} onChangeText={setUsername} style={[styles.input]} />

            <Text style={styles.title}>Password</Text>
            <TextInput value={password} onChangeText={setPassword} style={[styles.input]} secureTextEntry />

            <TouchableOpacity style={styles.buttonContainer} onPress={loginUser}>
               <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
         </View>

         {isSuccessModalDisplayed && (
            <LoginInfoModal text="Successfuly loged in!" isSuccess onClose={goToMyBooks} />
         )}

         {isErrorModalDisplayed && (
            <LoginInfoModal text="Error while logging in!" isSuccess={false} onClose={() => setIsErrorModalDisplayed(false)} />
         )}
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   mainContainer: {
      flex: 1,
      backgroundColor: Color.SALMON,
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
      backgroundColor: Color.WHITE,
      borderRadius,
      borderWidth: 1,
      borderColor: Color.BLACK,

   },
   focus: {
      borderColor: '#00f',
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
      backgroundColor: Color.SALMON_LIGHT,
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
