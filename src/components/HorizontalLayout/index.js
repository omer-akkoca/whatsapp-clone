import React from "react";
import { StyleSheet, View } from "react-native";

const HorizontalLayout = ({ 
    center = false,
	adjust = false,
	spread = false,
	end = false,
	top = false,
    style = {},
    children
}) => {

    const get_styles = () => {
		let style = [styles.layout];
		if (top) style.push(styles.top);
		if (center) style.push(styles.center);
		if (adjust) style.push(styles.adjust);
		if (spread) style.push(styles.spread);
		if (end) style.push(styles.end);

		return style;
	}

    return(
        <View style={[style, get_styles()]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
	layout: { flexDirection: 'row', alignItems: 'center' },
	top: { alignItems: 'flex-start' },
	center: { justifyContent: 'center' },
	adjust: { justifyContent: 'space-evenly' },
	spread: { justifyContent: 'space-between' },
	end: { justifyContent: 'flex-end' },
});

export default HorizontalLayout;