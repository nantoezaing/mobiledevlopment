import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Cart = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="cart-outline" size={28} color="black" />
      <View style={styles.textContainer}>
        <Text style={styles.quantity}>15</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 7,
  },
  textContainer: {
    marginLeft: -10,
    marginTop: -5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    width: 18,
    height: 18,
    borderRadius: 9,
  },
  quantity: {
    fontSize: 12,
    color: "#fff",
  },
});
