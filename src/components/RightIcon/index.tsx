import React from 'react'
import { Icon, Button } from 'native-base'
import { useSelector /* , useDispatch  */ } from 'react-redux'
import { datasetSelector } from '../../redux/selectors'

const RightIcon = (props: any) => {
    //let dispatch = useDispatch()
    let network = useSelector(state => datasetSelector(state, 'network'))
    let iconData = { color: 'white', name: 'wifi', disabled: true }

    if (!network.isConnected) {
        iconData.name = 'wifi-strength-off-outline'
        iconData.color = 'white'
    }

    return (
        <Button transparent disabled={iconData.disabled} onPress={() => {}}>
            <Icon
                type='MaterialCommunityIcons'
                name={iconData.name}
                style={{
                    fontSize: 20,
                    color: 'white',
                }}
            />
        </Button>
    )
}
export default RightIcon
