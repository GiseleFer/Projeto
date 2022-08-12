//atualizado
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, StatusBar, Pressable } from 'react-native';
import { ImageBackground } from 'react-native-web';
import { firebase } from '../../config';


const Cadastro = ({ navigation }) => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  registerUser = async (email,password,nome) =>{
   await firebase.auth().createUserWithEmailAndPassword(email,password)
   .then(()=>{
     firebase.auth().currentUser.sendEmailVerification({
      handleCodeInApp: true,
      url:'https://projetofinal-c7855.firebaseapp.com',
     })
     .then(()=>{
        alert('Sua Conta foi criada com Sucesso!')
     }).catch((error)=>{
      alert(error.message)
     })
     .then(()=>{
      firebase.firestore().collection('users')
      .doc(firebase.auth().currentUser.uid)
      .set({
        nome,
        email,
        password,
        
      })
     })
     .catch((error) =>{
      alert(error.message)
     })
   })
   .catch((error) =>{
    alert('Você precisa inserir ao menos 6 numeros!')
   })
  }
 
  return (
    
    <View style={styles.container}>
      


      {/**Informções centrais */}

      <TextInput method="POST" placeholder="Nome Completo" style={styles.textinput} onChangeText={nome => setNome(nome)} autoCapitalize='none' autoCorrect={false} />
      <Text style={{ color: 'white', marginRight: 233, top: -155, fontSize: 15 }}>Seu nome</Text>

      <TextInput placeholder="Ex: Pereira@gmail.com" style={styles.textinput} onChangeText={email => setEmail(email)} autoCapitalize='none' autoCorrect={false}/>
      <Text style={{ color: 'white', marginRight: 230, fontSize: 15, top: -155 }}>Seu e-mail</Text>

      <TextInput secureTextEntry={true} placeholder="********" style={styles.textinput} onChangeText={password => setPassword(password)} autoCapitalize='none' autoCorrect={false}/>
      <Text style={{ color: 'white', marginRight: 258, fontSize: 15, top: -155 }}>Senha</Text>
      {/**securetextEntry={true}*/}



      {/**cadastro */}
      <TouchableOpacity style={styles.btncad} onPress={()=>registerUser(email,password,nome)}>
        <Text style={{ fontSize: 16, color: 'white', textAlign: 'center' }}>Cadastrar</Text>
      </TouchableOpacity>
      {/**ir para */}


    </View>
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#255E2C",
    alignItems: "center",
    justifyContent: "center",
  },
  ini: {
    backgroundColor: "#7b42f5",
    top: 120,
    borderRadius: 5,
    width: 120,
    height: 30,
  },
  textinput: {
    height: 40,
    backgroundColor: "whitesmoke",
    borderRadius: 5,
    top: -80,
    marginEnd: -1,
    width: 300,
    padding: 10,
    marginBottom: 10,
  },

  //botao enviar
  btncad: {
    backgroundColor: "black", //black
    borderRadius: 5,
    height: 40,
    width: 90,
    justifyContent: "center",
    top: 70,
    borderStyle: "solid",
  },

  //botao ir para o carrosel
  btseg: {
    marginEnd: 150,
    top: 38,
    backgroundColor: "whitesmoke",
    borderRadius: 5,
    // },

    //botao voltar a tela inicial
    // btseg1:{
    // marginLeft:150,
    //  top:19,backgroundColor:'whitesmoke',borderRadius:5,
  },
});

export default Cadastro;