import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

interface Props {
  id: string;
  name: string;
  image: any;
  onSelect: (id: string) => void;
  select: string;
}
const Category = ({ id, name, image, onSelect, select }: Props) => {
  return (
    <Pressable onPress={() => onSelect(id)} style={styles.categoryContainer}>
      <Image
        style={[styles.image, select === id && styles.select]}
        source={image}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 17,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    fontWeight: "700",
  },
  select: {
    borderColor: "orange",
    borderWidth: 2,
    borderRadius: 25,
  },
});
