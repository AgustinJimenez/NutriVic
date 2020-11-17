import React from 'react'
import { Header, Body, Text } from 'native-base'
import DrawerIcon from '../DrawerIcon'
import GoBack from '../GoBack'
import RightIcon from '../RightIcon'

import { useTranslation } from 'react-i18next'

const AppHeader = (props: any) => {
    let { t } = useTranslation()
    return (
        <Header>
            {props['goBack'] ? <GoBack /> : <DrawerIcon />}
            <Body>
                <Text style={{ textTransform: 'uppercase', fontWeight: '600', color: 'white' }}>{t(props['trans_id'])}</Text>
            </Body>
            <RightIcon />
        </Header>
    )
}

export default AppHeader
