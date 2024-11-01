import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, Link } from "expo-router";
import { Image } from "expo-image";
import { FlashList } from "@shopify/flash-list";

import { User } from "@/type";
import { API_URL } from "@/config";
import { categories } from "@/data";

import Cart from "@/components/shop/Cart";
import Title from "@/components/shop/Title";
import Category from "@/components/shop/Category";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState<User[]>([]);
  const [select, setSelect] = useState("uuid1");

  const onSelectHandler = (id: string) => {
    setSelect(id);
  };

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
    getUsers();
  }, [navigation]);

  const getUsers = async () => {
    try {
      const response = await fetch(API_URL + "users");
      if (!response.ok) {
        throw new Error(`Request failed due to ${response.status}`);
      }
      const data = await response.json();
      // console.log("Response : ", data);
      setUsers(data);
    } catch (error) {
      console.warn("Internet connection lost!");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable>
          <Image
            style={styles.logo}
            source={require("@/assets/images/n.png")}
            placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
          />
        </Pressable>
        <Pressable>
          <Cart />
        </Pressable>
      </View>
      <ScrollView>
        <Image
          style={styles.banner}
          source={require("@/assets/images/banner6.png")}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
        <View style={styles.categoryContainer}>
          <Title title="Shop By Category" textAction="See All" />
          <FlashList
            data={categories}
            extraData={select}
            renderItem={({ item }) => (
              <Category {...item} onSelect={onSelectHandler} select={select} />
            )}
            estimatedItemSize={80}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  logo: {
    width: 40,
    height: 40,
  },
  banner: {
    width: "100%",
    aspectRatio: 20 / 9,
  },
  categoryContainer: {
    marginHorizontal: 20,
  },
});

// change some file and
