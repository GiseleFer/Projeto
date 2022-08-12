import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Ficção from "./telas/Fic"
import Mistério from "./telas/Mist";
import Ação from "./telas/Aça";
import Aventura from "./telas/Aven";
import Animação from "./telas/Ani";
import Comédia from "./telas/Comed";
import Projetos from "./telas/Destaques";
import Telainicial from "./telas/Telainicial";

const Stack = createNativeStackNavigator();

export default function ProjetosScreen() {
    return (
        <Stack.Navigator initialRouteName="Telainicial">
            <Stack.Screen name="Projetos" component={Projetos} options={{ headerShown: false }}/>
            <Stack.Screen name="Ficção" component={Ficção} />
            <Stack.Screen name="Mistério" component={Mistério} />
            <Stack.Screen name="Ação" component={Ação} />
            <Stack.Screen name="Aventura" component={Aventura} />
            <Stack.Screen name="Animação" component={Animação} />
            <Stack.Screen name="Comédia" component={Comédia} />
            <Stack.Screen name="Telainicial" component={Telainicial} options={{ headerShown: false}}/>
        </Stack.Navigator>
    );
}