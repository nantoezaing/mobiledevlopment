import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  title: string;
  textAction: string;
};

const Title = ({ title, textAction }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Pressable>
        <Text style={styles.seeAll}>{textAction}</Text>
      </Pressable>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  seeAll: {
    fontSize: 15,
    color: "gray",
  },
});
