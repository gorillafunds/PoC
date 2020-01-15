import Typography from "typography"
//import irvingTheme from "typography-theme-irving"
import funstonTheme from "typography-theme-funston"
//import bootstrapTheme from "typography-theme-bootstrap"

//const typography = new Typography(irvingTheme)
//const typography = new Typography(bootstrapTheme)
const typography = new Typography(funstonTheme)

export const { scale, rhythm, options } = typography
export default typography


////console.log("Typography:",typography.toString());