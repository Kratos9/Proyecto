
import { ScrollView, Text,StyleSheet } from "react-native";

export default function RegistrationScreen() {

 
    return(
            <ScrollView contentContainerStyle={style.container}>
                <Text>Registro</Text>   
            </ScrollView>
    );
};

const style = StyleSheet.create({
    container:{
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
    },
});