import { router } from "expo-router";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";

import { useForm, Controller } from "react-hook-form";
import { useSession } from "@/providers/ctx";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function SignIn() {
  const { signIn } = useSession();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  const onSubmit = async (formState: any) => {
    signIn();
    // Navigate after signing in. You may want to tweak this to ensure sign-in is
    // successful before navigating.
    router.replace("/");
    console.log(formState);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={require("@/assets/images/react-logo.png")}
            placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
          />
          <Text style={styles.logoText}>Fashion</Text>
        </View>
        <Text style={styles.signText}>Sign In {"\n"}To Your Account</Text>
        <Text style={styles.enterText}>
          Enter your phone and password to login
        </Text>
        <Text style={styles.label}>Phone number</Text>
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 7,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="09xxxxxxx"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              inputMode="numeric"
              maxLength={12}
            />
          )}
          name="phone"
        />
        {errors.phone && (
          <Text style={styles.errorText}>Phone number is required.</Text>
        )}

        <Text style={styles.label}>Password</Text>
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 8,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="*******"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              inputMode="numeric"
              maxLength={8}
              secureTextEntry
            />
          )}
          name="password"
        />
        {errors.password && (
          <Text style={styles.errorText}>password is invalid</Text>
        )}

        <Text style={styles.forgotText}>Forgot Password?</Text>

        <Pressable
          onPress={handleSubmit(onSubmit)}
          style={[styles.input, styles.btn]}
        >
          <Text style={styles.loginText}>Login</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 6,
    marginTop: 12,
    marginBottom: 5,
  },
  image: {
    width: 20,
    height: 20,
  },
  logoText: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: -3,
  },
  signText: {
    fontSize: 36,
    fontWeight: "700",
    lineHeight: 50,
  },
  enterText: {
    fontWeight: "700",
    color: "gray",
    marginTop: 12,
  },
  label: {
    color: "gray",
    marginTop: 12,
    marginBottom: 7,
    fontWeight: "700",
  },
  input: {
    backgroundColor: "white",
    color: "black",
    borderWidth: 0.5,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderColor: "#8c8c8c55",
  },
  forgotText: {
    marginVertical: 10,
    fontSize: 15,
    fontWeight: "700",
    color: "#2772Da",
    textAlign: "right",
  },
  btn: {
    marginTop: 20,
    backgroundColor: "#2772Da",
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
    padding: 4,
  },
  errorText: {
    paddingTop: 8,
    color: "#EF4444",
    fontWeight: "bold",
  },
});
