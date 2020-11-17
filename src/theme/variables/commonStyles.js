import { Platform, StyleSheet } from 'react-native'
import commonColor from './commonColor'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export const scale = (number = 1) => (number / 10) * width

export const colors = commonColor
export default StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeIcon: {
        position: 'absolute',
        alignSelf: 'flex-end',
        fontSize: 30,
        overflow: 'hidden',
        paddingLeft: 15,
        paddingBottom: 15,
    },
    colorPrimary: {
        color: commonColor.btnPrimaryBg, // brandPrimary
    },
    elevationLow: {
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 0.1 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
                //backgroundColor: 'red',
            },
            android: {
                elevation: 5,
            },
        }),
    },
    padVertical5: {
        paddingVertical: 5,
    },
    bgDanger: {
        backgroundColor: commonColor.btnDangerBg,
    },
    bgPrimary: {
        backgroundColor: commonColor.btnPrimaryBg,
    },
    bgWarning: {
        backgroundColor: commonColor.btnWarningBg,
    },
    //Helpers
    m0: {
        margin: 0,
    },
    p0: {
        padding: 0,
    },
    bold: {
        fontWeight: 'bold'
    }
})
