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
         renderItem={({ item: book }) => (
            <LendBorrowBookItem book={book} />
         )}
      />
   );
};

const styles = StyleSheet.create({
   container: {
      // paddingHorizontal: 24,
      borderRadius,
      // marginTop: 16,
      // borderWidth: 5,
      // width: '100%',
      backgroundColor: Color.WHITE
   },
});
