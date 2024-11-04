import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface ProductType {
  id: string;
  categories_id: string;
  brand: string;
  title: string;
  star: number;
  quantity: number;
  price: number;
  discount: number;
  image: any;
  favourite: boolean;
  description: string;
  onCallRoute: (id: string) => void;
}
const Product = ({
  brand,
  title,
  star,
  quantity,
  price,
  discount,
  image,
  id,
  onCallRoute,
}: ProductType) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => onCallRoute(id)}>
        <ImageBackground
          source={image}
          style={styles.imageView}
          imageStyle={styles.image}
        >
          <Pressable>
            <View style={styles.heartContainer}>
              <Ionicons name="heart" size={18} color="#E66F2D" />
            </View>
          </Pressable>
        </ImageBackground>
      </Pressable>
      <View style={styles.brandContainer}>
        <Text style={styles.brand}>{brand}</Text>
        <Ionicons name="star" size={12} color="orange" />
        <Text style={styles.star}>{star}</Text>
        <Text style={styles.quantity}>({quantity})</Text>
      </View>
      <Text style={styles.title}>
        {title.length > 25 ? title.substring(0, 25) + "..." : title}
      </Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.discount}>${discount}</Text>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
  },
  imageView: {
    width: 200,
    height: 250,
    resizeMode: "cover",
    alignItems: "flex-end",
  },
  image: {
    borderRadius: 5,
  },
  heartContainer: {
    width: 30,
    height: 30,
    backgroundColor: "#00000015",
    marginTop: 10,
    marginRight: 7,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  brandContainer: {
    flexDirection: "row",
    marginTop: 6,
    marginBottom: 2,
  },
  brand: {
    color: "gray",
    fontSize: 13,
    marginRight: 5,
  },
  star: {
    fontSize: 13,
    marginHorizontal: 3,
  },
  quantity: {
    fontSize: 13,
    color: "gray",
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: "row",
  },
  price: {
    color: "green",
    fontWeight: "bold",
    marginRight: 8,
  },
  discount: {
    color: "gray",
    textDecorationLine: "line-through",
  },
});
