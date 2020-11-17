import { Toast } from 'native-base'
import i18n from '../../app/i18n'

const showToast = (text: string = 'No message to Show', options: any = {}) => {
    let defaultOptions = {
        type: 'warning',
        position: 'bottom',
        duration: 6000,
        buttonText: 'OK',
    }
    let toastOptions = { ...defaultOptions, ...options }

    //console.log('SHOW-TOAST ===> ', { text, toastOptions })
    Toast.show({
        text: i18n.t(text),
        ...toastOptions,
    })

    return null
}
export default showToast
