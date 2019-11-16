import Typography from "typography"
import irvingTheme from "typography-theme-irving"
//import bootstrapTheme from "typography-theme-bootstrap"

const typography = new Typography(irvingTheme)
//const typography = new Typography(bootstrapTheme)

export const { scale, rhythm, options } = typography
export default typography

////console.log("Typography:",typography.toString());