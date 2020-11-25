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

const ProducerSection = ({}) => {
  return (
    <View style={styles.section_title}>
      <Text style={styles.section_title}> Sector productor </Text>
      <View style={styles.categories}>
        {[
          { title: 'Vacunas', image: ImageVaccine, onPress: () => {} },
          { title: 'Capsulas', image: ImagePills, onPress: () => {} },
          { title: 'Sprays', image: ImageSerum, onPress: () => {} },
          { title: 'Sueros', image: ImageSaline, onPress: () => {} },
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

const SpeciesSection = ({}) => {
  return (
    <View style={styles.section_title}>
      <Text style={styles.section_title}> Especies </Text>
      <View style={styles.categories}>
        {[
          { title: 'Caballos', image: ImageHorse, onPress: () => {} },
          { title: 'Ovejas', image: ImageSheep, onPress: () => {} },
          { title: 'Vacas', image: ImageCow, onPress: () => {} },
          { title: 'Cerdos', image: ImagePig, onPress: () => {} },
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
  return (
    <MainContainer>
      <Text style={[global_styles.title, styles.title]}>
        Buscar productos por
      </Text>
      <SpeciesSection />
      <ProducerSection />
      <CategorySection />
      <View style={styles.search}>
        <FlatButton title="Buscar" />
      </View>
    </MainContainer>
  )
}

export default HomeScreen
