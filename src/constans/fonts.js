import { StyleSheet } from "react-native";
import { w } from "./dimensions";

const fonts_family = StyleSheet.create({
	"400": { fontFamily: 'Barlow-Regular' },
	"500": { fontFamily: 'Barlow-Medium' },
	"600": { fontFamily: 'Barlow-SemiBold' },
	"700": { fontFamily: 'Barlow-Bold' },
	"800": { fontFamily: 'Barlow-ExtraBold' },

	"r": { fontFamily: 'Barlow-Regular' },
	"m": { fontFamily: 'Barlow-Medium' },
	"sb": { fontFamily: 'Barlow-SemiBold' },
	"b": { fontFamily: 'Barlow-Bold' },
	"eb": { fontFamily: 'Barlow-ExtraBold' },
});

const font_size = StyleSheet.create({
	xxxxxl: {fontSize: 0.1 * w},
	xxxxl: {fontSize: 0.09 * w},
	xxxl: {fontSize: 0.08 * w},
	xxl: {fontSize: 0.07 * w},
	xl: {fontSize: 0.06 * w},
	ld: {fontSize: 0.055 * w},
	l: {fontSize: 0.05 * w},
	dd: {fontSize: 0.045 * w},
	dc: {fontSize: 0.0425 * w},
	d: {fontSize: 0.04 * w},
	mm: {fontSize: 0.035 * w},
	m: {fontSize: 0.03 * w},
	smed: {fontSize: 0.025 * w},
	s: {fontSize: 0.02 * w},
	xs: {fontSize: 0.01 * w},
});

export { font_size, fonts_family };