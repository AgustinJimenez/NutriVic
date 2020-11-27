import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MainContainer from '../../components/MainContainer'
import global_styles, { colors, scale } from '../../styles'

import ImageHorse from '../../assets/images/horse.png'
import ImagePig from '../../assets/images/pig.png'
import ImageCow from '../../assets/images/cow.png'
import ImageSheep from '../../assets/images/sheep.png'

import CategoryButton from '../../components/CategoryButton'
import ImageVaccine from '../../assets/images/vaccine.png'
import ImagePills from '../../assets/images/pills.png'
import ImageSaline from '../../assets/images/saline.png'
import ImageSerum from '../../assets/images/serum.png'
import FlatButton from '../../components/FlatButton'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
  title: {
    textAlign: 'left',
    paddingHorizontal: scale(0.4),
    marginTop: scale(1),
  },
  section_title: {
    color: colors.primary(),
    fontWeight: '800',
    fontSize: 16,
  },
  section_title: {
    color: colors.primary(),
    fontWeight: '800',
    marginTop: scale(0.5),
    paddingHorizontal: scale(0.2),
    paddingBottom: scale(0.2),
    fontSize: 16,
  },
  categories: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
    left: 20,
  },
})
const SpeciesSection = ({}) => {
  const navigation = useNavigation()
  const { t } = useTranslation()
  return (
    <View style={styles.section_title}>
      <Text style={styles.section_title}> Especies </Text>
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
  return (
    <View style={styles.section_title}>
      <Text style={styles.section_title}> Sector productor </Text>
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
  return (
    <View style={styles.section_title}>
      <Text style={styles.section_title}> Categoría </Text>
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
            titleStyles={{ fontSize: 11 }}
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
      <Text style={[global_styles.title, styles.title]}>
        {t('search_product_by')}
      </Text>
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
