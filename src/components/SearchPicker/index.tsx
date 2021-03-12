import React from 'react'
import { ScrollView, Platform, TouchableOpacity } from 'react-native'
import {
  Card,
  Button,
  Text,
  Icon,
  Header,
  Title,
  List,
  Spinner,
  Badge,
  View,
  CardItem,
} from 'native-base'
import SearchBar from 'react-native-search-bar'
import Modal from 'react-native-modal'
import { useTranslation } from 'react-i18next'
import styles from './styles'

const SearchPicker = ({
  placeholder,
  title,
  listItems,
  onChange,
  isFetching,
  selectedValues,
  onSelectItemList,
  type = 'single' || 'multiple',
}: any) => {
  let { t } = useTranslation()
  let [modalIsVisible, setModalVisibility] = React.useState(false)
  let [searchValue, setSearchValue] = React.useState('')
  let placeholderText = t(placeholder)
  let hasValue = false
  if (type === 'single')
    listItems.some(({ value, label }: any) => {
      if (selectedValues.includes(value)) {
        hasValue = true
        placeholderText = label
        return true
      }
    })

  return (
    <>
      <Button
        style={{ backgroundColor: 'white' }}
        block
        light
        onPress={() => {
          setModalVisibility(!modalIsVisible)
        }}
      >
        <Text note={!hasValue} style={{ flex: 1 }}>
          {placeholderText}
        </Text>
        <Icon name="ios-arrow-down" type="Ionicons" />
        <Modal
          onBackButtonPress={() => {
            setModalVisibility(!modalIsVisible)
          }}
          onBackdropPress={() => {
            setModalVisibility(!modalIsVisible)
          }}
          isVisible={modalIsVisible}
          propagateSwipe
        >
          <Card>
            <Header>
              <Title style={{ flex: 1, textAlignVertical: 'center' }}>
                {t(title)}
              </Title>
              <Icon
                type="AntDesign"
                name="close"
                onPress={() => {
                  setModalVisibility(!modalIsVisible)
                }}
                style={styles.exitIcon}
                //style={[styles.colorPrimary]}
              />
            </Header>
            <View
              style={{ marginVertical: Platform.OS === 'android' ? 20 : 0 }}
            >
              <SearchBar
                searchBarStyle="prominent"
                //barStyle='black'
                barTintColor="white"
                textFieldBackgroundColor="white"
                cancelButtonText={t('cancel')}
                placeholder={t(placeholder)}
                ref={(ref) => {
                  //if (!!ref) this.searchBar = ref
                }}
                onChangeText={(text) => {
                  setSearchValue(text)
                  onChange(text)
                }}
              />
            </View>
            <ScrollView>
              <List>
                {listItems
                  .filter(({ label }: any) => {
                    if (searchValue.trim().length)
                      return (
                        label
                          .toLowerCase()
                          .search(searchValue.toLowerCase()) !== -1
                      )
                    else return true
                  })
                  .slice(0, 50)
                  .map(({ label, value }: any, key: number) => {
                    let isSelected = selectedValues.includes(value)
                    let iconType = isSelected ? 'AntDesign' : 'Entypo'
                    let iconName = isSelected ? 'checkcircle' : 'circle'
                    return (
                      <TouchableOpacity
                        key={key}
                        onPress={() => {
                          if (type === 'single') {
                            onSelectItemList(value)
                            return
                            //setModalVisibility(!modalIsVisible)
                          } else if (type === 'multiple' && isSelected)
                            selectedValues = selectedValues.filter(
                              (val: any) => val !== value
                            )
                          else if (type === 'multiple' && !isSelected)
                            selectedValues.push(value)
                          onSelectItemList(selectedValues)
                        }}
                        style={{
                          flexWrap: 'wrap',
                          flexDirection: 'row',
                          paddingVertical: 15,
                          paddingLeft: 15,
                          borderColor: 'transparent',
                        }}
                      >
                        <Text
                          style={{
                            color: 'black',
                            flex: 0.9,
                            flexWrap: 'wrap',
                          }}
                        >
                          {label}
                        </Text>
                        <View
                          style={{
                            flex: 0.2,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <Icon
                            name={iconName}
                            type={iconType}
                            style={{ color: brandPrimary }}
                          />
                        </View>
                      </TouchableOpacity>
                    )
                  })}
              </List>
            </ScrollView>
            {isFetching && <Spinner color={brandPrimary} />}
          </Card>
        </Modal>
      </Button>
      {type === 'multiple' && (
        <View style={{ width: '100%', alignItems: 'flex-end', marginTop: 3 }}>
          {listItems
            .filter(({ value }: any) => {
              return selectedValues.includes(value)
            })
            .map(({ label }: any, key: number) => (
              <CardItem key={key} cardBody style={{ marginVertical: 3 }}>
                <Badge primary>
                  <Text>{label}</Text>
                </Badge>
              </CardItem>
            ))}
        </View>
      )}
    </>
  )
}
export default SearchPicker
