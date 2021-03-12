import React from 'react'
import { Text, View, ActivityIndicator, RefreshControl } from 'react-native'
import MainContainer from '../../components/MainContainer'
/* 
import ImageHorse from '../../assets/images/horse.png'
import ImagePig from '../../assets/images/pig.png'
import ImageCow from '../../assets/images/cow.png'
import ImageSheep from '../../assets/images/sheep.png'
import ImageVaccine from '../../assets/images/vaccine.png'
import ImagePills from '../../assets/images/pills.png'
import ImageSaline from '../../assets/images/saline.png'
import ImageSerum from '../../assets/images/serum.png' 
*/
import CategoryButton from '../../components/CategoryButton'
import FlatButton from '../../components/FlatButton'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { homeSagaAction } from '../../sagas/actions'
import { datasetSelector } from '../../redux/selectors'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles'
import palette from '../../styles/palette'
import getImageUriFromEntity from '../../utils/getImageUriFromEntity'

const SpeciesSection = ({}) => {
  const navigation = useNavigation()
  const { t } = useTranslation()
  const species = useSelector((state) =>
    datasetSelector(state, 'species', { list_format: true })
  )
  const home_screen_is_loading = useSelector((state) =>
    datasetSelector(state, 'home_screen_is_loading')
  )
  return (
    <View style={styles.section_title}>
      <Text style={styles.section_title}> {t('species')} </Text>
      <View style={styles.categories}>
        {home_screen_is_loading && !species?.count() && (
          <ActivityIndicator
            size="large"
            style={styles.loader}
            color={palette.primary()}
          />
        )}
        {species
          .sort((a: any, b: any) => a.order - b.order)
          .map(({ id, name, images }: any, key: number) => (
            <CategoryButton
              title={name}
              img_source={getImageUriFromEntity({ images })}
              onPress={() =>
                navigation.navigate('Products', {
                  species_id: id,
                })
              }
              key={key}
            />
          ))}
      </View>
    </View>
  )
}
const SectorSection = ({}) => {
  const { t } = useTranslation()
  const navigation = useNavigation()
  const sectors = useSelector((state) =>
    datasetSelector(state, 'sectors', { list_format: true })
  )
  const home_screen_is_loading = useSelector((state) =>
    datasetSelector(state, 'home_screen_is_loading')
  )
  return (
    <View style={[styles.section_title, styles.bgLight]}>
      <Text style={styles.section_title}> {t('producer_sector')} </Text>
      <View style={styles.categories}>
        {home_screen_is_loading && !sectors?.count() && (
          <ActivityIndicator
            size="large"
            style={styles.loader}
            color={palette.primary()}
          />
        )}
        {sectors
          .sort((a: any, b: any) => a.order - b.order)
          .map(({ id, name, images }: any, key: number) => (
            <CategoryButton
              title={name}
              img_source={getImageUriFromEntity({ images })}
              onPress={() =>
                navigation.navigate('Products', {
                  sector_id: id,
                })
              }
              key={key}
            />
          ))}
      </View>
    </View>
  )
}
const CategorySection = ({}) => {
  const { t } = useTranslation()
  const navigation = useNavigation()
  const categories = useSelector((state) =>
    datasetSelector(state, 'categories', { list_format: true })
  )
  const home_screen_is_loading = useSelector((state) =>
    datasetSelector(state, 'home_screen_is_loading')
  )
  return (
    <View style={styles.section_title}>
      <Text style={styles.section_title}> {t('category')} </Text>
      <View style={styles.categories}>
        {home_screen_is_loading && !categories?.count() && (
          <ActivityIndicator
            size="large"
            style={styles.loader}
            color={palette.primary()}
          />
        )}
        {categories
          .sort((a: any, b: any) => a.order - b.order)
          .map(({ id, name, images }: any, key: number) => (
            <CategoryButton
              title={name}
              img_source={getImageUriFromEntity({ images })}
              onPress={() =>
                navigation.navigate('Products', {
                  category_id: id,
                })
              }
              key={key}
            />
          ))}
      </View>
    </View>
  )
}

const HomeScreen = ({}) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const home_screen_is_loading = useSelector((state) =>
    datasetSelector(state, 'home_screen_is_loading')
  )
  const fetchDatas = React.useCallback(() => {
    dispatch(homeSagaAction())
  }, [])

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchDatas()
    })

    return unsubscribe
  }, [navigation])

  return (
    <MainContainer>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        refreshControl={
          <RefreshControl
            tintColor={palette.primary()}
            refreshing={home_screen_is_loading}
            progressViewOffset={0}
            onRefresh={fetchDatas}
          />
        }
      >
        <Text style={[styles.title]}>{t('search_product_by')}</Text>
        <SpeciesSection />
        <SectorSection />
        <CategorySection />
      </KeyboardAwareScrollView>
    </MainContainer>
  )
}

export default HomeScreen
