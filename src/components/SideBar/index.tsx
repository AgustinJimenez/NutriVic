import React from 'react'
import { Image, Alert, ScrollView, SafeAreaView } from 'react-native'
import { CardItem, Thumbnail, Body, List, ListItem, Text, Left, Right, Icon, View, Label } from 'native-base'
import styles from './styles'
import sidebar_top_img from '../../assets/images/company_logo.png'
import { connect } from 'react-redux'
import { logoutAction } from '../../actions'
import { withTranslation } from 'react-i18next'
import capitalize from '../../utils/capitalize'
import userImage from '../../assets/images/user.png'
import { getVersion, getBuildNumber } from 'react-native-device-info'
import { datasetSelector } from '../../redux/selectors'

class SideBar extends React.Component {
    state = {}

    getSidebarRoutes = () => [
        { title: this.props.t('home'), icon: 'home', route: 'Home' },
        { title: this.props.t('settings'), icon: 'settings', route: 'Settings' },
        {
            title: this.props.t('logout'),
            type: 'MaterialCommunityIcons',
            icon: 'exit-to-app',
            onPress: () => {
                Alert.alert(this.props.t('warning'), this.props.t('sure_want_leave'), [
                    {
                        text: this.props.t('no'),
                    },
                    {
                        text: this.props.t('yes'),
                        onPress: () => {
                            this.props.navigation.closeDrawer()
                            this.props.logoutAction()
                        },
                    },
                ])
            },
        },
        //{ title: '1 - Simmple List', route: 'SimpleList' },
        //{ title: '2 - List Details', route: 'ListDetails' },
    ]

    render() {
        let routes = this.getSidebarRoutes()
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CardItem bordered style={styles.logotop}>
                    <Image source={sidebar_top_img} style={styles.sidebar_top_img} resizeMode='contain' />
                </CardItem>
                <CardItem bordered>
                    <Left>
                        <View style={styles.avatar}>
                            <Thumbnail progressiveRenderingEnabled defaultSource={userImage} source={{ uri: this.props?.auth?.avatar }} />
                        </View>
                        <Body>
                            <Text>{capitalize(this.props?.auth?.username)}</Text>
                            <Text note>{this.props?.auth?.branch_name}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <ScrollView>
                    <List primary style={styles.list}>
                        {routes.map((sidebar_route: any, key: number) => {
                            let iconProps = {
                                type: sidebar_route.type,
                                name: sidebar_route.icon,
                            }

                            return (
                                <ListItem
                                    key={key}
                                    last={routes.length === key + 1}
                                    button
                                    style={{ marginLeft: 0, paddingLeft: 20 }}
                                    onPress={() => {
                                        if (!!sidebar_route.onPress) sidebar_route.onPress()
                                        else {
                                            this.props.navigation.navigate(sidebar_route.route)
                                        }
                                    }}
                                >
                                    <Left>
                                        <Text style={styles.text_color}>{sidebar_route.title}</Text>
                                    </Left>

                                    <Right>
                                        <Icon active style={styles.red} {...iconProps} />
                                    </Right>
                                </ListItem>
                            )
                        })}
                    </List>
                </ScrollView>

                <List style={{ alignSefl: 'flex-end' }}>
                    <ListItem key={100}>
                        <Body style={{ flexDirection: 'row' }}>
                            <Label>Version:</Label>
                            <Text>{getVersion()}</Text>
                        </Body>
                        <Body style={{ flexDirection: 'row' }}>
                            <Label>Build:</Label>
                            <Text>{getBuildNumber()}</Text>
                        </Body>
                    </ListItem>
                </List>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state: any) => ({
    auth: datasetSelector(state, 'auth'),
})
const mapDispatchToProps = {
    logoutAction,
}

SideBar = withTranslation()(SideBar)
export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
