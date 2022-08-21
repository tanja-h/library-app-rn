import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { LendBorrowBookItem } from "./LendBorrowBookItem";
import { Book } from "../../utils/typeUtils";
import { Color } from "../../styles/Colors";
import { borderRadius, horizontalPadding } from "../../styles/constants";
import { NavigationOnly } from "../../utils/navigationTypeUtils";
import { RouteName } from "../../utils/routeUtils";

interface Props extends NavigationOnly {
   books: Book[];
}

export const LendBorrowBooksList = ({ books, navigation }: Props) => {
   const goToBookOverview = (id: string) => {
      navigation.navigate(RouteName.BOOK, { id });
   }

   return (
      <FlatList
         data={books}
         showsVerticalScrollIndicator={false}
         style={styles.container}
         contentContainerStyle={styles.contentContainer}
         renderItem={({ item: book }) => (
            <LendBorrowBookItem book={book} onPress={() => goToBookOverview(book.id)} />
         )}
      />
   );
};

const tabNavigationHeight = 80;

const styles = StyleSheet.create({
   container: {
      backgroundColor: Color.SALMON,
      height: '100%',
   },
   contentContainer: {
      paddingBottom: tabNavigationHeight, //hack
      paddingHorizontal: horizontalPadding,
   },
});
