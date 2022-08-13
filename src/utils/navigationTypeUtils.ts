import { StackScreenProps } from '@react-navigation/stack';
import { RouteName } from "./routeUtils";

export type RootStackParamList = {
    [RouteName.LOGIN]: undefined;
    [RouteName.MY_BOOKS]: undefined;
    [RouteName.LEND_BORROW]: undefined;
    [RouteName.HOME]: { screen: RouteName };
    [RouteName.SEARCH]: undefined;
    [RouteName.BOOK]: { id: string };
};

export type NavigationProps<T extends keyof RootStackParamList = any> = StackScreenProps<RootStackParamList, T>;

export type NavigationOnly = Pick<NavigationProps, 'navigation'>
