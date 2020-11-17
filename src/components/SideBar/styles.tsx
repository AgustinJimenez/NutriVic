import app_styles, { colors } from '../../theme/variables/commonStyles'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    avatar: {
        ...app_styles.elevationLow,
    },
    sidebar_top_img: {
        ...app_styles.center,
        width: '100%',
    },
    listItemIcon: {
        color: 'black',
    },
    logotop: {
        backgroundColor: 'white',
    },
    red: {
        color: colors.brandPrimary,
    },
})
