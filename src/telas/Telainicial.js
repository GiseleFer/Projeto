import React, { useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground, Image, Pressable, Linking, TouchableOpacity,BackHandler, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { firebase } from '../../config';

const Telainicial = ({ navigation }) => {

  const backAction = () => {
    Alert.alert("Oi usuario!", "Você realmente deseja sair?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);


  return (


    <View style={styles.container}>
       <ImageBackground source={require('../../assets/livros-.jpg')} resizeMode="cover" style={styles.image}>
      <View style={styles.header2}>
        <Text style={{ color: 'white', fontSize: 16,textAlign:'center',top:15}}>
          Bem Vindo!
        </Text>

        <View style={styles.menu}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name='ios-menu-outline' size={30} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>

      

   
      <Pressable style={styles.perfil} onPress={() => navigation.navigate("Projetos")}>
        <Text style={{ color: 'white', textAlign: 'center', top:2 }}>
          Confira os Destaques!
        </Text>
      </Pressable>

      <Pressable style={styles.btlogin} onPress={() => {firebase.auth().signOut()}}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Sair</Text>
      </Pressable>

      </ImageBackground>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sair: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  header2: {
    width: "100%",
    height: 50,
    backgroundColor: "#255E2C", //#3233ae
    top: -292,
  },
  titulo: {
    top: 150,
    fontSize: 15,
    color: "black",
    alignItems: "center",
    borderRadius: 5,
  },
  titulo1: {
    top: 155,
    fontSize: 15,
    color: "black",
    alignItems: "center",
    borderRadius: 5,
  },

  botao1: {
    backgroundColor: "#2dd9d0",
    borderRadius: 5,
    width: 100,
    height: 30,
    top: 40,
    borderWidth: 2,
    borderColor: "white",
    marginLeft: 125,
  },
  perfil: {
    top: -50,
    backgroundColor: "#3233ae",
    width: 130,
    height: 55,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "white",
    marginLeft: 115,
    paddingTop: 4
  },

  nomeinf: {
    top: 329,
    backgroundColor: "#2dd9d0",
    borderRadius: 5,
    width: 100,
    height: 30,
    borderWidth: 2,
    borderColor: "white",
    marginLeft: 125,
  },
  menu: {
    top: -10,
    marginLeft: 10,
  },
  bot1t: {
    textAlign: "center",
    top: 2,
  },

  img1: {
    width: 160,
    height: 200,
    alignItems: "center",
    marginLeft: 100,
  },
  email1: {
    top: 20,
    fontSize: 15,
    alignItems: "center",
    borderRadius: 5,
    marginLeft: 10,
    backgroundColor: "#85e6c0",
    width: 100,
    height: 30,
  },
  email2: {
    top: -9.9,
    borderRadius: 5,
    marginLeft: 130,
    backgroundColor: "#85e6c0",
    width: 100,
    height: 30,
  },
  linkedin: {
    backgroundColor: "#85e6c0",
    width: 100,
    height: 30,
    borderRadius: 5,
    borderStyle: "solid",
    top: -40,
    marginLeft: 250,
  },
  btlogin: {
    width: "20%",
    height: 23,
    borderRadius: 3,
    borderWidth: 2,
    backgroundColor: "#3233ae",
    top: -381,
    marginLeft: 280,
  },
  rodape: {
    backgroundColor: "#000000c0",
    top: 115,
    width: 360,
    height: 80,
  },
  textrod: {
    color: "white",
    fontSize: 16,
    fontFamily: "serif",
  },
});

export default Telainicial;


