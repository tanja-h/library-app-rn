import React from "react"
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { Color } from "./styles/Colors";
import { LendBorrowPage } from "./components/lendBorrow/LendBorrowPage"
import { Login } from "./components/Login"
import { MyBooks } from "./components/myBooks/MyBooksPage";
import { SearchPage } from "./components/search/SearchPage";
import { BookPage } from "./components/book/BookPage";

export const Routes: React.FC = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    const noHeaderOption: NativeStackNavigationOptions = { headerShown: false };

    const screenOptions: BottomTabNavigationOptions = {
        headerTitleAlign: 'left',
        headerTitleStyle: styles.title,
        tabBarActiveTintColor: Color.SALMON_DARK,
        tabBarLabelStyle: styles.tabLabel,
    };

    const HomeTabs = () => (
        <Tab.Navigator>
            <Tab.Screen
                name="My books"
                component={MyBooks}
                options={screenOptions}
            />
            <Tab.Screen
                name="Lend/Borrow"
                component={LendBorrowPage}
                options={screenOptions}
            />
            <Tab.Screen
                name="Search"
                component={SearchPage}
                options={screenOptions}
            />
        </Tab.Navigator>
    );

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={noHeaderOption} />
                <Stack.Screen name="Home" component={HomeTabs} options={noHeaderOption} />
                <Stack.Screen name="Book" component={BookPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const letterSpacing = 0.5;

const styles = StyleSheet.create({
    title: {
        color: Color.SALMON_DARK,
        fontSize: 22,
        letterSpacing,
    },
    tabLabel: {
        fontSize: 12,
        letterSpacing,
    }
});