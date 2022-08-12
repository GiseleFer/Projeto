import 'react-native-gesture-handler';
import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Telainicial from "./src/telas/Telainicial";
import Login from "./src/telas/login";
import Cadastro from "./src/telas/cad";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Projetos from './src/Stack';

import { firebase } from './config';

const Stack = createNativeStackNavigator();

function FirebaseApp (){
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user){
    setUser(user);
    if(initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if(initializing) return null;

  if(!user){
    return(
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
          headerStyle={
            {
              backgroundColor:'#27282d',
            }
          }        />
        <Stack.Screen
          name='Cadastro'
          component={Cadastro}
        />
      </Stack.Navigator>
    )
  }

  return(
    <MyDrawer />
  )
}

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="MiniCurriculos">
      <Drawer.Screen name='Telainicial' component={Telainicial} options={{ headerShown: false }}/>
      <Drawer.Screen name="Projetos"  component={Projetos} options={{ headerShown:false,
        headerStyle:{
          backgroundColor:'',
        }
      }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <FirebaseApp/>
    </NavigationContainer>
  );
}





















/*
   constructor(props){
       super(props);
       this.state = {
         activeIndex:0,
         carouselItems: [
         {
             title:"Informações...",
             text: "",
             img: 'https://sistemarecursoshumanos.com.br/imagens/imagenet-cadastro-de-curriculos.png'
         },
         {
             title:"Informções...",
             text: "",
             img: 'https://blog.selecty.com.br/wp-content/uploads/2021/02/ferramentas-de-busca-para-o-processo-de-recrutamento-e-selecao-de-pessoas-800x534px.jpg'
         },
         {
             title:"Informações...",
             text: "",
             img: 'https://img.freepik.com/vetores-gratis/contratacao-de-agencia-candidatos-e-entrevista-de-emprego_1262-18940.jpg?w=2000'
         },
         {
             title:"Informações",
             text: "",
             img: 'https://img.freepik.com/vetores-gratis/processo-de-entrevista-de-emprego-contratacao-de-novos-funcionarios-personagem-de-desenho-animado-especialista-em-rh-conversando-com-o-novo-candidato-recrutamento-emprego-ilustracao-do-conceito-de-headhunting_335657-2034.jpg'
         },
         {
             title:"Informações",
             text: "",
             img: 'https://img.freepik.com/vetores-gratis/gestao-de-recursos-humanos-analise-de-trabalho-sourcing-triagem-e-selecao-personagem-feminina-de-desenho-animado-lendo-formularios-de-emprego-e-curriculo-de-candidatos_335657-2682.jpg?w=360'
         },
       ]
     }
     /**https://www.sodexobeneficios.com.br/data/files/8B/B4/A8/50/AACC1710D8DAEB17930BF9C2/dicas-para-fazer-o-curriculo.png */
   //// }

/*
_renderItem({item,index}){
    return (
      <View style={{
          backgroundColor:'#a6aec1',
          borderRadius: 5,
          height: 500,
          padding:10,
          marginLeft: 30,
          marginRight: 30, }}>
        <Text style={{fontSize: 30}}>{item.title}</Text>
        <Text style={styles.texto}>{item.text}</Text>
        <Image 
          style={styles.img}
          source={{uri:item.img}}/>
          <TextInput placeholder="bla bla bla..." style={styles.meio1}></TextInput>
          <TextInput placeholder="bla bla bla..." style={styles.meio2}></TextInput>
          <TextInput placeholder="bla bla bla..." style={styles.meio3}></TextInput>
        

      </View>

    )
}

render() {
    return (
      <SafeAreaView style={{flex:1, backgroundColor:'#e8fdff', paddingTop: 100, }}>
        <View style={{ flex: 0, flexDirection:'row', justifyContent: 'center', }}>
            <Carousel
              layout={"default"}
              ref={ref => this.carousel = ref}
              data={this.state.carouselItems}
              sliderWidth={250}
              itemWidth={300}
              renderItem={this._renderItem}
              onSnapToItem = { index => this.setState({activeIndex:index}) } />
        </View>
      </SafeAreaView>
    );
}
}
*/
/*
  const styles = StyleSheet.create({
    texto:{
      color:'white',
    },
    textocont:{
      colo:'white',
      backgroundColor:'black',
    },
    img:{
      alignItems:'center',
      top:10,
      width:50,
      height:180,
      resizeMode: 'stretch',
      paddingLeft:217,
    },
    meio1:{
      widht:'100%',
        height:30,
        backgroundColor:'white',
        borderRadius:20,
        paddinglef:10,
        margimBottom:10,
        top:100,
        textAlign:'center' ,
    },
    meio2:{
      widht:'100%',
        height:30,
        backgroundColor:'white',
        borderRadius:20,
        paddinglef:10,
        margimBottom:10,
        top:110,
        textAlign:'center',
    },
    meio3:{
      widht:'100%',
        height:30,
        backgroundColor:'white',
        borderRadius:20,
        paddinglef:10,
        top:120,
        textAlign:'center',
    },
  });
  

  */