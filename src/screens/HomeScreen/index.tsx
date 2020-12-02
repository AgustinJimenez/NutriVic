import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MainContainer from '../../components/MainContainer'
import { colors, scale } from '../../styles'

import ImageHorse from '../../assets/images/horse.png'
import ImagePig from '../../assets/images/pig.png'
import ImageCow from '../../assets/images/cow.png'
import ImageSheep from '../../assets/images/sheep.png'
import ImageVaccine from '../../assets/images/vaccine.png'
import ImagePills from '../../assets/images/pills.png'
import ImageSaline from '../../assets/images/saline.png'
import ImageSerum from '../../assets/images/serum.png'
import CategoryButton from '../../components/CategoryButton'
import FlatButton from '../../components/FlatButton'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
  title: {
    textAlign: 'left',
    paddingHorizontal: scale(0.4),
    marginTop: scale(1),
    fontSize: scale(0.5),
    color: colors.primary(),
    fontWeight: 'bold',
  },
  section_title: {
    color: colors.primary(),
    fontWeight: 'bold',
    marginTop: scale(0.5),
    paddingHorizontal: scale(0.2),
    paddingBottom: scale(0.2),
    fontSize: scale(0.38),
  },
  categories: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    alignItems: 'center',
    position: 'absolute',
    bottom: scale(0.5),
    right: scale(0.5),
    left: scale(0.5),
  },
})
const SpeciesSection = ({}) => {
  const navigation = useNavigation()
  const { t } = useTranslation()
  return (
    <View style={styles.section_title}>
      <Text style={styles.section_title}> {t('species')} </Text>
      <View style={styles.categories}>
        {[
          { image: ImageHorse, code: 'horses' },
          { image: ImageSheep, code: 'sheeps' },
          { image: ImageCow, code: 'cows' },
          { image: ImagePig, code: 'pigs' },
        ].map(({ image, code }: any, key: number) => (
          <CategoryButton
            title={t(code)}
            img_source={image}
            onPress={() =>
              navigation.navigate('Products', {
                code,
              })
            }
            key={key}
          />
        ))}
      </View>
    </View>
  )
}
const ProducerSection = ({}) => {
  const { t } = useTranslation()
  return (
    <View style={styles.section_title}>
      <Text style={styles.section_title}> {t('producer_sector')} </Text>
      <View style={styles.categories}>
        {[
          { title: 'Vacunas', image: ImageVaccine },
          { title: 'Capsulas', image: ImagePills },
          { title: 'Sprays', image: ImageSerum },
          { title: 'Sueros', image: ImageSaline },
        ].map(({ title, image, onPress }: any, key: number) => (
          <CategoryButton
            title={title}
            img_source={image}
            onPress={() => {}}
            key={key}
          />
        ))}
      </View>
    </View>
  )
}
const CategorySection = ({}) => {
  const { t } = useTranslation()
  return (
    <View style={styles.section_title}>
      <Text style={styles.section_title}> {t('category')} </Text>
      <View style={styles.categories}>
        {[
          { title: 'Brucelosis', image: ImageVaccine, onPress: () => {} },
          { title: 'Brucelosis', image: ImageVaccine, onPress: () => {} },
          { title: 'Brucelosis', image: ImageVaccine, onPress: () => {} },
          { title: 'Brucelosis', image: ImageVaccine, onPress: () => {} },
        ].map(({ title, image, onPress }: any, key: number) => (
          <CategoryButton
            title={title}
            img_source={image}
            onPress={onPress}
            key={key}
          />
        ))}
      </View>
    </View>
  )
}

const HomeScreen = ({}) => {
  const { t } = useTranslation()
  return (
    <MainContainer>
      <Text style={[styles.title]}>{t('search_product_by')}</Text>
      <SpeciesSection />
      <ProducerSection />
      <CategorySection />
      <View style={styles.search}>
        <FlatButton title={t('search')} />
      </View>
    </MainContainer>
  )
}

export default HomeScreen
