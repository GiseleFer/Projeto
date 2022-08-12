import react from "react";
import { Text,View,StyleSheet,Pressable,Image} from "react-native";

const Hosp = ({navigation}) => {
    return (
      <View style={styles.header}>
        <View style={styles.header2}>
          <Text style={styles.texto}>Enola Holmes </Text>
          <View style={styles.espaco}>
            <Image
              style={{ width: 200, top: 30, marginLeft: 50 }}
              source={require("../../assets/livro-o-caso-do-marques-desaparecido-enola-holmes-01-nancy-springer-em-pdf-epub-mobi-ou-ler-online.jpg")}
            />
            <View style={styles.scrow}>
              <Text style={styles.textespaco}>
                Entre disfarces e fugas, a irmã de Sherlock Holmes vai nos
                mostrar que o sangue investigativo também faz parte dela. Mas
                será que Enola será capaz de decodificar as pistas necessárias e
                finalmente encontrar sua mãe? O livro que inspirou o filme
                homônimo do Netflix estrelado por Milly Brown, Henry Cavill e
                Sam Claflin.
              </Text>
              <View>
                <Pressable
                  style={styles.botao}
                  onPress={() => navigation.navigate("Projetos")}
                >
                  <Text style={styles.botaotext}>Voltar</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    AlignItems: "center",
    width: "100%",
    flex: 1,
    marginVertical: 1,
    backgroundColor: "#f0f5f5",
  },
  header2: {
    paddingHorizontal: 15,
    width: "100%",
    height: 60,
    marginVertical: 1,
    backgroundColor: "#c1d5d5",
    top: 20,
    borderRadius: 5,
    borderWidth: 2,
  },
  texto: {
    textAlign: "center",
    marginTop: 17,
    fontSize: 18,
    color: "#000",
  },
  textespaco: {
    padding: 15,
    textAlign: "justify",
  },
  scrow: {
    backgroundColor: "#a3c4c2",
    height: 200,
    top: 45,
    borderRadius: 5,
    borderWidth: 2,
  },
  botao: {
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 2,
    top: 30,
    width: 100,
    height: 40,
    marginLeft: 100,
  },
  botaotext: {
    textAlign: "center",
    top: 9,
    color: "black",
    fontSize: 16,
    fontFamily: "serif",
  },
});
export default Hosp;
