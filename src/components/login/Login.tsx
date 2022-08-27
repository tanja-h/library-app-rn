import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView, StatusBar, Image, TouchableOpacity } from "react-native";
import { LoginInfoModal } from "./LoginInfoModal";
import { Color } from "../../styles/Colors";
import { borderRadius } from "../../styles/constants";
import { RouteName } from "../../utils/routeUtils";
import { NavigationProps } from "../../utils/navigationTypeUtils"
import { loginUser } from "../../http/http";

const isEmpty = (text: string) => {
   return text.length === 0;
}

export const Login = ({ navigation }: NavigationProps) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [isErrorModalDisplayed, setIsErrorModalDisplayed] = useState(false);
   const [isSuccessModalDisplayed, setIsSuccessModalDisplayed] = useState(false);
   const [errorMessage, setErrorMessage] = useState('Error');

   const login = async () => {
      if (isEmpty(email)) {
         setErrorMessage('Email is empty!');
         setIsErrorModalDisplayed(true);
         return;
      }

      if (isEmpty(password)) {
         setErrorMessage('Password is empty!');
         setIsErrorModalDisplayed(true);
         return;
      }

      const { error, name } = await loginUser({ email, password });

      if (error) {
         setErrorMessage(error);
         setIsErrorModalDisplayed(true);
      } else if (name) {
         console.log('name', name);
         setIsSuccessModalDisplayed(true);
      }
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

            <Text style={styles.title}>Email</Text>
            <TextInput value={email} onChangeText={setEmail} style={[styles.input]} />

            <Text style={styles.title}>Password</Text>
            <TextInput value={password} onChangeText={setPassword} style={[styles.input]} secureTextEntry />

            <TouchableOpacity style={styles.buttonContainer} onPress={login}>
               <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
         </View>

         {isSuccessModalDisplayed && (
            <LoginInfoModal text="Successfuly loged in!" isSuccess onClose={goToMyBooks} />
         )}

         {isErrorModalDisplayed && (
            <LoginInfoModal text={errorMessage} isSuccess={false} onClose={() => setIsErrorModalDisplayed(false)} />
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
