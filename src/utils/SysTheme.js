import { useColorScheme } from "react-native";

const SysTheme = () => {
    const isDark = useColorScheme() == 'dark';
    return {
        isDark
    }
}
export default SysTheme;