import { Montserrat_100Thin } from "@expo-google-fonts/montserrat";
import React, { cloneElement } from "react";
import { Text,View,StyleSheet,Pressable,Image,ImageBackground,Linking} from "react-native";


const image = { uri: "https://i.pinimg.com/736x/90/0b/55/900b55526c28a8f9de4d992cfdee2452.jpg" };
const Projetos = ({navigation}) => {
    return (
      <View style={styles.header}>
        <ImageBackground
          source={require("../../assets/books.jpg")}
          style={styles.image}
        >
          <View style={styles.header2}>
            <Text style={styles.texto}>Livros em destaque</Text>
            <View
              style={{
                backgroundColor: "#255E2C",
                width: 100,
                height: 30,
                top: 70,
                borderRadius: 5,
                marginLeft: 115,
              }}
            >
              <View>
                <Text style={{ color: "white", top: 5, textAlign: "center" }}>
                  Novidades
                </Text>
              </View>
            </View>

            <View style={styles.container1}>
              <Image
                style={{ width: 100, height: 100, top: 16, marginLeft: 22 }}
                source={require("../../assets/Livro-Interestelar-Jonathan-Nolan-Em-Epub-Pdf-Mobi-Ou-Ler-Online_large.jpg")}
              />
              <Pressable
                style={styles.acad}
                onPress={() => navigation.navigate("Ficção")}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Ficção
                </Text>
              </Pressable>
              {/**<Pressable style={styles.botao1} onPress={() => navigation.navigate("Projetos")}> */}
              <Image
                style={{ width: 100, height: 100, top: -107, marginLeft: 145 }}
                source={require("../../assets/livro-o-caso-do-marques-desaparecido-enola-holmes-01-nancy-springer-em-pdf-epub-mobi-ou-ler-online.jpg")}
              />
              <Pressable
                style={styles.acad2}
                onPress={() => navigation.navigate("Mistério")}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Mistério
                </Text>
              </Pressable>

              <Image
                style={{
                  width: 100,
                  height: 100,
                  top: -230.5,
                  marginLeft: 270,
                }}
                source={require("../../assets/A-Cidade-Perdida-James-Rollins-em-Pdf-ePub-e-Mobi-ou-ler-online.jpg")}
              />
              <Pressable
                style={styles.acad3}
                onPress={() => navigation.navigate("Ação")}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>Ação</Text>
              </Pressable>

              <View style={styles.container2}>
                {/**Texto do site */}
                <View
                  style={{
                    backgroundColor: "#255E2C",
                    width: 100,
                    height: 30,
                    top: -30,
                    marginLeft: 145,
                    borderRadius: 5,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      marginTop: 5,
                    }}
                  >
                    Lançamentos
                  </Text>
                  <View>
                    {/**view de separação */}
                    {/** file:///C:/xampp/htdocs/dashboard/index/index.html */}
                    <Image
                      style={{
                        width: 100,
                        height: 100,
                        top: 40,
                        marginLeft: -123,
                      }}
                      source={require("../../assets/livro-o-garoto-do-fundo-da-sala.jpg")}
                    />
                    <Pressable
                      style={{
                        top: 45,
                        backgroundColor: "#0092C8",
                        borderWidth: 2,
                        borderColor: "white",
                        marginLeft: -122,
                        width: 100,
                        borderRadius: 5,
                      }}
                      onPress={() => navigation.navigate("Aventura")}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        Aventura
                      </Text>
                    </Pressable>
                    {/**<Pressable style={styles.botao1} onPress={() => navigation.navigate("Projetos")}> */}
                    <Image
                      style={{
                        width: 100,
                        height: 100,
                        top: -83,
                        marginLeft: -2,
                      }}
                      source={require("../../assets/EM-BUSCA-DE-WONDLA–WONDLA-1–TONY-DITERLIZZI-mobi-pdf-epub-ou-ler-online.jpg")}
                    />
                    <Pressable
                      style={{
                        top: -77,
                        backgroundColor: "#0092C8",
                        borderWidth: 2,
                        borderColor: "white",
                        marginLeft: -4,
                        width: 100,
                        borderRadius: 5,
                      }}
                      onPress={() => navigation.navigate("Animação")}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        Animação
                      </Text>
                    </Pressable>

                    <Image
                      style={{
                        width: 100,
                        height: 100,
                        top: -205,
                        marginLeft: 121,
                      }}
                      source={require("../../assets/comediainfantil.jpg")}
                    />
                    <Pressable
                      style={{
                        top: -200,
                        backgroundColor: "#0092C8",
                        borderWidth: 2,
                        borderColor: "white",
                        marginLeft: 120,
                        width: 100,
                        borderRadius: 5,
                      }}
                      onPress={() => navigation.navigate("Comédia")}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        Comédia
                      </Text>
                    </Pressable>
                    <Pressable
                      style={styles.botao}
                      onPress={() => navigation.navigate("Telainicial")}
                    >
                      <Text style={styles.botaotext}>Voltar</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  header2: {
    paddingHorizontal: 15,
    width: "100%",
    height: 70,
    borderRadius: 5,
    marginVertical: 1,
    backgroundColor: "#255E2C",
    top: -315,
    //backgroundColor:'red',
    //height:100,
    // top:60,
  },
  botao: {
    backgroundColor: "#3233ae", //black
    top: -160,
    width: 110,
    height: 35,
    borderRadius: 5,
    marginLeft: -9,
    borderWidth: 2,
    borderColor: "white",
  },
  botaovlt: {
    color: "white",
    textAlign: "center",
    top: 5,
  },
  botaotext: {
    marginTop: 3,
    marginLeft: 30,
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  texto: {
    marginLeft: 74,
    marginTop: 20,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  container1: {
    // backgroundColor:'whitesmoke',
    height: 150,
    width: "120%",
    top: 75,
    marginLeft: -30,
  },
  acad: {
    top: 20,
    marginLeft: 22.5,
    backgroundColor: "#0092C8",
    borderWidth: 2,
    borderColor: "white",
    width: 100,
    alignItems: "center",
    borderRadius: 5,
  },
  acad2: {
    top: -103,
    marginLeft: 145,
    backgroundColor: "#0092C8",
    borderWidth: 2,
    borderColor: "white",
    width: 100,
    alignItems: "center",
    borderRadius: 5,
  },
  acad3: {
    top: -226,
    marginLeft: 270,
    backgroundColor: "#0092C8",
    borderWidth: 2,
    borderColor: "white",
    width: 100,
    alignItems: "center",
    borderRadius: 5,
  },
  container2: {
    //backgroundColor:'#00CED1',
    top: -100,
    height: 150,
    width: "120%",

    // },
    // zap:{
    //    backgroundColor:'#7b42f5',
    //      width:100,
    //    height:30,
    //  borderRadius:5,
    //  borderStyle:"solid",
    //  top:20,
    // marginLeft:10
    // },face
    // :{
    //   backgroundColor:'#7b42f5',
    //  width:100,
    //  height:30,
    // borderRadius:5,
    // borderStyle:"solid",
    //  top:-10,
    //  marginLeft:130,
    // },linkedin:{
    //  backgroundColor:'#7b42f5',
    //  width:100,
    // height:30,
    // borderRadius:5,
    // borderStyle:"solid",
    //  top:-40,
    // marginLeft:250,
  },
});
{/**
const styles = StyleSheet.create({
   header:{
        paddingHorizontal:15,
        FlexDirection:'row',
        AlignItems:'center',
        width:'100%',
        marginVertical:20,
    },
    inpputArea:{
        paddingHorizontal:15,
        FlexDirection:'row',
        AlignItems:'center',
        width:'98%',
        backgroundColor:'#fff',
        height:17,
        borderradius:10,
    },
    input:{
        fontFamily:'Montserrat_500Medium',
        paddingHorizontal:10,
        fonySize:13,
        width:'90%',
    },
    contentNew:{
        FlexDirection:'row',
        width:'100%',
        AlignItems:'center',
    },
    title:{
        paddingHorizontal:15,
        fontFamily:'Montserrat_700Bold',
        fontSize:18,
        color:'a4f44a',
    }
});*/} 

   function Link (){
    Linking.openURL('https://api.whatsapp.com/send?phone=5592992684911&text=Bem%20vindo%20!')
  }function Link2 (){
    Linking.openURL('https://www.facebook.com/salomao.junior.167')
  }function Link3(){ 
    Linking.openURL('https://www.linkedin.com/in/salom%C3%A3o-fonseca-6b2b6023b/')
  }

  

export default Projetos;
//<View style={styles.rodaper}>
                 //           Redes Sociais:
                  //      </Text>
                     //   {/**Email rodaper*/}
                       // <Pressable onPress={Link} style={styles.zap}>
                       //   <Text style={{color:'white',textAlign:"center",marginTop:5}}>Whatsapp</Text>
                      //  </Pressable>

                       // <Pressable onPress={Link2}style={styles.face}>
                         //   <Text style={{color:'white',textAlign:'center',marginTop:5}}>Facebook</Text>
                        // </Pressable>

                        // <Pressable onPress={Link3}style={styles.linkedin}>
                        //    <Text style={{color:'white',textAlign:"center",marginTop:5}}>Linkedin</Text>
                        // </Pressable>

                   // </View>