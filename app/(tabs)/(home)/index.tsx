import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, Link } from "expo-router";

import { User } from "@/type";
import { API_URL } from "@/config";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState<User[]>([]);

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
     setUsers(data)
    } catch (error) {
      console.warn("Internet connection lost!");
    }
  };

  return (
    <SafeAreaView>
      <View>
        <Text>HomeScreen</Text>
        <Link href="/detail">Go To DetailScreen </Link>
        {users.map((user) => (
          <Text>{user.name}</Text>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;


