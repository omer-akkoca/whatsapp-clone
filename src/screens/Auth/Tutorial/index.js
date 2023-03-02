import React from "react"
import { View } from "react-native"
import { P } from "../../../components";

const Tutorial = () => {
    return(
        <View style={{ flex: 1, backgroundColor: "orange", justifyContent: "center", alignItems: "center" }}>
            <P color="black" size="l">Tutorial</P>
        </View>
    )
}

export default Tutorial;