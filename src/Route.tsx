import React from "react"
import { LendBorrowPage } from "./components/lendBorrow/LendBorrowPage"
import { MyBooks } from "./components/myBooks/MyBooksPage"
// import { View, Text } from "react-native"
// import { Login } from "./components/Login"
// import { NavigationContainer } from '@react-navigation/native';

export const Routes: React.FC = () => {

    return (
        <>
            {/* <NavigationContainer> */}
            {/* // <Text>Route</Text> */}
            {/* // <Login /> */}
            {/* <MyBooks /> */}
            <LendBorrowPage />
            {/* </NavigationContainer> */}
        </>
    )
}