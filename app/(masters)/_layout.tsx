import { useColorScheme } from "@/hooks/useColorScheme.web";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar"

export default function MastersLayout(){

    const colorScheme = useColorScheme ();
    return(
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

                <Stack 
                        screenOptions={{
                            headerShown: true,
                        }}>     
                        <Stack.Screen name="registration" options={{ title: "Registro"}}/>
                        </Stack>
                <StatusBar style="auto" />
            </ThemeProvider>
//aqui se definio el estilo del contenedor de las pantallas en este caso se esta usando stack(pisas)
    );
}