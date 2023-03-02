import React from "react";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation";
import { store } from "./redux";

const App = () => {
    return(
        <Provider store={store}>
            <SafeAreaProvider>
                <Navigation logged={false}/>
            </SafeAreaProvider>
        </Provider>
    )
}

export default App;