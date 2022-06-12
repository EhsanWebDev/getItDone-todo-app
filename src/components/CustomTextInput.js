
import React from 'react';
import { View, StyleSheet, TextInput, useColorScheme } from 'react-native'
import { useSelector } from 'react-redux';
import { darkThemeColor, generalSizes, lightColors } from '../globalStyles/globalStyles';
import CustomText from './CustomText';


const CustomTextInput = ({
    onChangeText = () => { },
    onSubmitEditing, label = "Label", placeholder = "Enter text",
    secureTextEntry, errors = false,
    value, autoFocus, blurOnSubmit, password, customStyle,
    onBlur = () => { },
    disabled = false, showPass, setShowPass, placeholderTextColor = lightColors.primary, ...rest
}) => {
    const state = useSelector(state => state)
    const { theme: reduxTheme, themeSource } = state.settings || {}
    const theme = reduxTheme
    return (
        <View style={[{ marginTop: generalSizes.size_lg }, customStyle]} {...rest}>
            {/* <CustomText
                title={label}
                size={12}
                extraStyles={styles.label}
            /> */}
            <View style={{ flexDirection: password ? "row" : "column" }}>
                <TextInput
                    onBlur={onBlur}
                    editable={!disabled}
                    placeholder={placeholder}
                    placeholderTextColor={theme === "light" ? lightColors.secondary : darkThemeColor.primary}
                    autoCapitalize={'none'}
                    value={value}
                    secureTextEntry={password && !showPass}
                    onChangeText={onChangeText}
                    returnKeyType="done"
                    returnKeyLabel="Done"
                    onSubmitEditing={onSubmitEditing}
                    blurOnSubmit={blurOnSubmit}
                    autoFocus={autoFocus}
                    style={[styles.container, { color: theme === "light" ? lightColors.secondary : darkThemeColor.primary }]}
                />
                {/* {password ? <View style={{
                    borderBottomColor: colors.input_border,
                    borderBottomWidth: 0.5,
                    marginBottom: 0,
                    marginTop: 10,
                    paddingLeft: 10
                }} >
                    <TouchableOpacity onPress={setShowPass}>
                        <IonIcons name={showPass ? "md-eye-off-outline" : "ios-eye-outline"} size={16} />
                    </TouchableOpacity>
                </View> : null} */}

            </View>

            {/* {errors &&
                <CustomText
                    title={errors}
                    size={10}
                    extraStyles={styles.error}
                />
            } */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        borderColor: lightColors.muted,
        borderWidth: 1,
        color: lightColors.secondary,
        fontSize: 12,
        paddingHorizontal: generalSizes.size_md,
        borderRadius: generalSizes.size_sm
    },
    label: { alignSelf: 'flex-start', color: lightColors.secondary },
    error: { color: lightColors.light, marginTop: 2 }
})

export default CustomTextInput;