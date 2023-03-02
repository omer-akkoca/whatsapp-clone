import React from 'react';
import { StyleSheet, View } from 'react-native';
import { W, H } from '../../constans/dimensions';

const Space = ({ v = "m", h = "m", style = {}, children }) => {
    return (
        <View style={[styles[`v_${v}`], styles[`h_${h}`], style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
	v_n: { paddingVertical: 0 },
	v_xxs: { paddingVertical: H(0.3) },
	v_xs: { paddingVertical: H(0.6) },
	v_s: { paddingVertical: H(1.2) },
	v_smed: { paddingVertical: H(1.8) },
	v_m: { paddingVertical: H(2.4) },
	v_l: { paddingVertical: H(4.8) },
	v_xl: { paddingVertical: H(9.6) },
	v_xxl: { paddingVertical: H(19.2) },
	h_n: { paddingHorizontal: 0 },
	h_xxs: { paddingHorizontal: W(0.5) },
	h_xs: { paddingHorizontal: W(1) },
	h_s: { paddingHorizontal: W(2) },
	h_smed: { paddingHorizontal: W(3) },
	h_m: { paddingHorizontal: W(4) },
	h_l: { paddingHorizontal: W(8) },
	h_xl: { paddingHorizontal: W(10) },
	h_xxl: { paddingHorizontal: W(12) }
})

export default Space;