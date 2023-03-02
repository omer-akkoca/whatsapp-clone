import React from "react";
import { Text } from "react-native";
import { font_size, fonts_family } from "../../constans/fonts";

const P = ({
    color = "#ffffff",
    size = "m",
    type = "m",
    align = "left",
    lines,
    lineHeight,
    underline,
    underlineColor = "#000000",
    letterSpacing = 0,
    children
}) => {

    const p_type = fonts_family[type]
    const p_size = font_size[size]
    const p_underline = underline ? { textDecorationLine: "underline", textDecorationColor: underlineColor } : {}

    return(
        <Text
            style={[
                {
                    color,
                    textAlign: align,
                    letterSpacing,
                    lineHeight
                },
                p_type,
                p_size,
                p_underline
            ]}
            numberOfLines={lines}
        >
            {children}
        </Text>
    )
}

export default P;