import React from 'react'
import { Icon, Button } from 'native-base'
import { useNavigation } from '@react-navigation/native'

const GoBack = (props: any) => {
    const navigation = useNavigation()

    return (
        <Button transparent onPress={() => navigation.goBack()}>
            <Icon
                //success
                name='chevron-left'
                //fontSize={18}
                type='MaterialCommunityIcons'
                style={{ color: 'white' }}
            />
        </Button>
    )
}
export default GoBack
