import { Dimensions } from "react-native"
import { getStatusBarHeight } from "react-native-safearea-height"

export const window = Dimensions.get("window")
export const screen = Dimensions.get("screen")

export const w = window.width
export const h = window.height

export const sbh = getStatusBarHeight()

export const W = (d) => w * d / 100;
export const H = (d) => (h - sbh) * d / 100;