import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Tutorial } from "../screens";

const AuthStack = createNativeStackNavigator()
const AppStack = createNativeStackNavigator()

const Navigation = ({ logged }) => {

    const AuthScreens = () => {
        return(
            <AuthStack.Navigator
                initialRouteName="Tutorial"
                screenOptions={{ headerShown: false }}
            >
                <AuthStack.Screen name="Tutorial" component={Tutorial}/>
                <AuthStack.Screen name="Login" component={Login}/>
            </AuthStack.Navigator>
        )
    }

    const AppScreens = () => {
        <AppStack.Navigator>
            
        </AppStack.Navigator>
    }

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                {
                    logged
                    ?   <AppScreens/>
                    :   <AuthScreens/>
                }
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default Navigation;