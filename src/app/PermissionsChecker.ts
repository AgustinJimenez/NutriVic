import { useEffect } from 'react'
import PushNotification from 'react-native-push-notification'
import { PERMISSIONS, RESULTS, check, request } from 'react-native-permissions'
import { Platform } from 'react-native'

const androidPermissions: Array<string> = [PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION, PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]
const iosPermissions: Array<string> = [PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]

const getAndroidPermissions = () => {
    if (Platform.OS === 'android') return androidPermissions
    return []
}
const getIosPermissions = () => {
    if (Platform.OS === 'ios') return iosPermissions
    return []
}
const getAllPermissions = () => getAndroidPermissions().concat(getIosPermissions())
const checkNotificationPermissions = async (permissions: any) => {
    //console.log('componentDidMount - PushNotification - checkPermissions', { permissions })
    let permissionsToRequest = []
    let notifPermissions = ['alert', 'badge', 'sound']
    notifPermissions.map(str => {
        if (!permissions[str]) permissionsToRequest.push(str)
    })
    if (permissionsToRequest.length) permissions = await PushNotification.requestPermissions(['alert', 'badge', 'sound'])
}
const PermissionsChecker = () => {
    var permissionStatus: any = null

    useEffect(() => {
        PushNotification.checkPermissions(permissions => {
            checkNotificationPermissions(permissions)
        })
        getAllPermissions().map(async (p: any) => {
            permissionStatus = await check(p)
            switch (permissionStatus) {
                case RESULTS.UNAVAILABLE:
                    //console.log('This feature is not available (on this device / in this context)')
                    break
                case RESULTS.DENIED:
                    try {
                        await request(p)
                    } catch (e) {
                        console.log('HERE ==> ', e)
                    }
                    break
                case RESULTS.GRANTED:
                    //console.log('The permission is granted');
                    break
                case RESULTS.BLOCKED:
                    //console.log('The permission is denied and not requestable anymore');
                    break
            }
        })
    }, [])

    return null
}

export default PermissionsChecker
