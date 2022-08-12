import react from "react";
import { Text,View,StyleSheet,Pressable,Image} from "react-native";

const Acad = ({navigation}) => {
    return (
      <View style={styles.header}>
        <View style={styles.header2}>
          <Text style={styles.texto}>Interestelar</Text>
          <View style={styles.espaco}>
            <Image
              style={{ width: 200, top: 30, marginLeft: 50 }}
              source={require("../../assets/Livro-Interestelar-Jonathan-Nolan-Em-Epub-Pdf-Mobi-Ou-Ler-Online_large.jpg")}
            />
            <View style={styles.scrow}>
              <Text style={styles.textespaco}>
                Interestelar é a crônica de um grupo de exploradores que se
                aproveita de um recém-descoberto buraco de minhoca para
                ultrapassar os limites das viagens espaciais tripuladas e assim
                conquistar as grandes distâncias de uma jornada interestelar.
                Enquanto viajam, estão em risco o destino do planeta...
                Terra...e o futuro da raça humana.
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
export default Acad;
