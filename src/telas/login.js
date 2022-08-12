import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { firebase } from "../../config";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert("E-mail ou senha incorretos!");
    }
  };

  {
    /*const cadastro = () => {
        alert('Bem vindo!');
    }
*/
  }
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {/**meio */}
      <Text
        style={{ color: "white", top: -101, marginRight: 228, fontSize: 16 }}
      >
        {" "}
        Seu e-mail
      </Text>
      <TextInput
        placeholder="Ex: Pereira@gmail.com"
        style={styles.input1}
        onChangeText={(email) => setEmail(email)}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Text style={styles.senha}>Sua senha</Text>
      <TextInput
        secureTextEntry={true}
        placeholder="********"
        style={styles.input2}
        onChangeText={(password) => setPassword(password)}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <TouchableOpacity
        style={styles.butao}
        onPress={() => {
          loginUser(email, password);
        }}
      >
        <Text style={{ color: "white", textAlign: "center", marginTop: 10 }}>
          Entrar
        </Text>
      </TouchableOpacity>

      <Pressable
        style={styles.butaofzrlogin}
        onPress={() => navigation.navigate("Cadastro")}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Cadastre-se</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8B83F0",
    alignItems: "center",
    justifyContent: "center",
  },
  input1: {
    //meio 1
    height: 40,
    backgroundColor: "whitesmoke",
    borderRadius: 5,
    top: -100,
    marginEnd: -1,
    width: 300,
    padding: 10,
  },
  input2: {
    //meio 2
    height: 40,
    backgroundColor: "whitesmoke",
    borderRadius: 5,
    top: -77,
    marginEnd: -1,
    width: 300,
    padding: 10,
  },
  butao: {
    //butao entrar
    height: 40,
    width: 90, //width:'30%', // height:22,
    backgroundColor: "black",
    borderRadius: 5,
    borderColor: "#1e0c42",
    marginLeft: 10,
    top: 80,
  },
  butaofzrlogin: {
    //butão do cadastro
    width: "25%",
    height: 28,
    borderRadius: 5,
    backgroundColor: "black",
    top: -380,
    paddingTop: 4,
    marginRight: -260,
  },
  senha: {
    //texto da sua senha
    color: "white",
    fontSize: 16,
    marginRight: 228,
    top: -79,
  },
});

export default Login;
