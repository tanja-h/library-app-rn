import React from "react"
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { Color } from "./styles/Colors";
import { LendBorrowPage } from "./components/lendBorrow/LendBorrowPage"
import { Login } from "./components/login/Login"
import { MyBooksPage } from "./components/myBooks/MyBooksPage";
import { SearchPage } from "./components/search/SearchPage";
import { BookPage } from "./components/book/BookPage";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ProfilePage } from "./components/profile/ProfilePage";
import { AddBookIcon } from "./components/AddBookIcon";
import { AddNewBookPage } from "./components/addNewBook/AddNewBookPage"
import { RouteName } from "./utils/routeUtils";

export const Routes: React.FC = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    const noHeaderOption: NativeStackNavigationOptions = { headerShown: false };

    const screenOptions: BottomTabNavigationOptions = {
        headerStyle: styles.header,
        headerTitleAlign: 'left',
        headerTitleStyle: styles.title,
        tabBarStyle: styles.tab,
        tabBarLabelStyle: styles.tabLabel,
        tabBarActiveTintColor: Color.SALMON_DARK,
    };

    const HomeTabs = () => (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name={RouteName.MY_BOOKS}
                component={MyBooksPage}
                options={({ navigation }) => ({
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="book-open-page-variant-outline" size={size} color={color} />
                    ),
                    headerRight: () => <AddBookIcon navigation={navigation} />,
                })}
            />
            <Tab.Screen
                name={RouteName.LEND_BORROW}
                component={LendBorrowPage}
                options={({ navigation }) => ({
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="swap-vertical-variant" size={size} color={color} />
                    ),
                    headerRight: () => <AddBookIcon navigation={navigation} isExchange />,
                })}
            />
            <Tab.Screen
                name={RouteName.SEARCH}
                component={SearchPage}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="magnify" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name={RouteName.PROFILE}
                component={ProfilePage}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="account" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );

    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerTintColor: Color.SALMON_DARK }} >
                <Stack.Screen name={RouteName.LOGIN} component={Login} options={noHeaderOption} />
                <Stack.Screen name={RouteName.HOME} component={HomeTabs} options={noHeaderOption} />
                <Stack.Screen name={RouteName.BOOK} component={BookPage} />
                <Stack.Screen name={RouteName.ADD_NEW_BOOK} component={AddNewBookPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const letterSpacing = 0.5;
const borderWidth = 1;

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: borderWidth,
        borderBottomColor: Color.BLACK
    },
    title: {
        color: Color.SALMON_DARK,
        fontSize: 22,
        letterSpacing,
    },
    tab: {
        borderTopWidth: borderWidth,
        borderTopColor: Color.BLACK,
        paddingTop: 4,
    },
    tabLabel: {
        fontSize: 12,
        letterSpacing,
    },
});