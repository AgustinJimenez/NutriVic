import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, Icon } from 'native-base'

const DrawerIcon = (props: any) => {
    const navigation = useNavigation()

    return (
        <Button transparent onPress={navigation.openDrawer}>
            <Icon name='menu' style={{ color: 'white' }} />
        </Button>
    )
}

export default DrawerIcon
