import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { Book } from "../../database/fakeData";
import { Color } from "../../styles/Colors";
import { borderRadius } from "../../styles/constants";
import { LendBorrowBookItem } from "./LendBorrowBookItem";

interface Props {
   books: Book[];
}

export const LendBorrowBooksList = ({ books }: Props) => {

   return (
      <FlatList
         data={books}
         showsVerticalScrollIndicator={false}
         style={styles.container}
         contentContainerStyle={styles.contentContainer}
         renderItem={({ item: book }) => (
            <LendBorrowBookItem book={book} />
         )}
      />
   );
};

const styles = StyleSheet.create({
   container: {
      borderRadius,
      backgroundColor: Color.WHITE,
   },
   contentContainer: {
      // flex: 1
   },
});
