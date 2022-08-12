import react from "react";
import { Text,View,StyleSheet,Pressable,Image} from "react-native";

const Compra = ({navigation}) => {
    return (
      <View style={styles.header}>
        <View style={styles.header2}>
          <Text style={styles.texto}>O Garoto do Fundo da Sala </Text>
          <View style={styles.espaco}>
            <Image
              style={{ width: 150,  top: 30, marginLeft: 75 }}
              source={require("../../assets/livro-o-garoto-do-fundo-da-sala.jpg")}
            />
            <View style={styles.scrow}>
              <Text style={styles.textespaco}>
                Tinha uma cadeira vazia no fundo da minha sala, mas agora um
                garoto chamado Ahmet está se sentando nela. Ele tem nove anos de
                idade (assim como eu), mas é muito estranho. Ele nunca fala,
                nunca sorri e não gosta de doce - nem mesmo bala de limão, que é
                minha favorita! Mas aí eu descobri a verdade: Ahmet não é tão
                estranho. Ele é um refugiado que escapou da guerra. Uma guerra
                de verdade. Com bombas, fogo e pessoas más que machucam os
                outros. 
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
    top: 15,
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
export default Compra;
