import React from "react";
import { Text,View,StyleSheet,Image,Linking,Pressable,ImageBackground,TouchableOpacity} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';


const image = { uri: "https://i.pinimg.com/736x/90/0b/55/900b55526c28a8f9de4d992cfdee2452.jpg" };
const Perfil = ({navigation}) => {
    return(
        <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}> 
        {/*
        <View style={{top:-40,marginLeft:10}}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name='ios-menu-outline' size={30} color={'red'} />
          </TouchableOpacity>
          </View>
    */}
          <Text style={styles.text}> Perfil do Usuario </Text>
         
      
          <View style={styles.container2}>
            <Text style={styles.textex}>Exemplo:</Text>
            <Image
        style={styles.img1}
        source={require('../../assets/usu.png')} />
        <View style={{padding:10}}>
            <Text style={{color:'white',fontSize:16,marginLeft:10,}}>Estudante </Text>
            <Text style={{color:'white',fontSize:16,marginLeft:10,}}>Salomão Fonseca Pantoja junior</Text>
            <Text style={{color:'white',fontSize:16,marginLeft:9.5,}}>18 Anos</Text>
            <Text style={{color:'white',fontSize:16,marginLeft:10,}}>Programador</Text>
            <Text style={{color:'white',fontSize:16,marginLeft:10,}}>Desenvolvedor Web</Text>
        </View>  
          </View>
          <Pressable style={styles.projetos} onPress={() => navigation.navigate("Projetos1")}>
              <Text style={{color:'white',fontSize:16,top:15,textAlign:"center"}}>Projetos</Text>
            </Pressable>
          <Pressable style={styles.botao}onPress={()=>navigation.navigate("Telainicial")}>
            <Text style={{color:'white',fontSize:16,top:15,textAlign:"center"}}>Voltar</Text>
          </Pressable>

         
        {/**   <Pressable style={styles.botao}>
            <Text style={{color:'white',fontSize:16,marginLeft:150,top:10}}>
              Voltar
            </Text>
          </Pressable>*/}
           <View style={styles.rodape}>
        <Text style={styles.textrod}>
          Redes sociais:
        </Text>
        <Pressable onPress={Link} style={styles.email1}>
          <Text style={{ color: 'white', top: 5 }}>Whatsapp</Text>
        </Pressable>

        <Pressable onPress={Link2} style={styles.email2}>
          <Text style={{ color: 'white', textAlign: 'center', top: 5 }}>Facebook</Text>
        </Pressable>

        <Pressable onPress={Link3} style={styles.linkedin}>
          <Text style={{ color: 'white', textAlign: "center", marginTop: 5 }}>Linkedin</Text>
        </Pressable>
      </View>
        </ImageBackground>
      </View>
    );
} 
const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      image: {
        flex: 1,
        justifyContent: "center"
      },
      img1:{
        width:100,
        height:100,
        top:-15,
        marginLeft:20,
      },  
      text: {
        color: "white",
        fontSize: 30,
        lineHeight: 70,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0",
        borderRadius:5,
        top:-76.9,
      },
      container2:{
        backgroundColor:'#322c8e',
        height:300,
        width:300,
        marginLeft:30,
        borderRadius:5,
        top:20
      },
      textex:{
        color:"white",
        top:-20,
      },
      botao:{
        backgroundColor:'black',
        top:30,
        height:50,
        width:100,marginLeft:55,borderRadius:5
      },
      projetos:{
        marginLeft:200,
        backgroundColor:'black',
        top:80,
        height:50,
        width:100,borderRadius:5
      },
      rodape: {
        backgroundColor: '#000000c0',
        top:75,
        width: 360,
        height: 80,
      }, 
      textrod: {
        color: 'white',
        fontSize: 16,
        fontFamily: "serif"
      },
      email1: {
        top: 20,
        fontSize: 15,
        alignItems: 'center',
        borderRadius: 5, marginLeft: 10, backgroundColor: '#85e6c0',
        width: 100,
        height: 30,
      },
      email2: {
        top: -9.9,
        borderRadius: 5, marginLeft: 130, backgroundColor: '#85e6c0',
        width: 100,
        height: 30,
      },
      linkedin: {
        backgroundColor: '#85e6c0',
        width: 100,
        height: 30,
        borderRadius: 5,
        borderStyle: "solid",
        top: -40,
        marginLeft: 250,
      },
}); function Link() {
  Linking.openURL('https://api.whatsapp.com/send?phone=5592992684911&text=Bem%20vindo%20!')
} function Link2() {
  Linking.openURL('https://www.facebook.com/salomao.junior.167')
} function Link3() {
  Linking.openURL('https://www.linkedin.com/in/salom%C3%A3o-fonseca-6b2b6023b/')
}
export default Perfil;