

import React from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native'
import { darkThemeColor, generalSizes, lightColors } from '../globalStyles/globalStyles';


const Container = ({ children, flex, row, rowSb, bg = "", withoutGeneralMargin, mt = 0, mb = 0, mv = 0, mh = 0, pv = 0, ph = 0, shadow_sm, br = 0, width = "auto", height = "auto" }) => {

    return (
        <View style={[
            {
                flex: flex ? flex : 0, backgroundColor: bg,
                //
                marginTop: mt, marginBottom: mb, marginVertical: mv, marginHorizontal: mh,

                paddingHorizontal: ph, paddingVertical: pv,
                borderRadius: br, width, height
            },
            row ? styles.row : null, rowSb ? styles.rowSb : null,
            !withoutGeneralMargin ? styles.container : null,
            shadow_sm ? styles.shadow_sm : null
        ]}>
            {children}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginHorizontal: generalSizes.size_lg
    },
    row: { flexDirection: "row", alignItems: 'center' },
    rowSb: { flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' },
    shadow_sm: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    }
})
export default Container;