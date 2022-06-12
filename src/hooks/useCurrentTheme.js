import { useEffect, useState, } from "react";
import { useColorScheme } from "react-native"

const useCurrentTheme = (themeSource, localTheme) => {
    const [theme, setTheme] = useState(localTheme)
    const sysTheme = useColorScheme();

    // console.log({ localTheme, themeSource, theme })
    // useEffect(() => {
    //     if (themeSource === "local") {
    //         setTheme(localTheme)
    //     }
    // }, [localTheme])



    return themeSource === "local" ? localTheme : useColorScheme()
}

export default useCurrentTheme