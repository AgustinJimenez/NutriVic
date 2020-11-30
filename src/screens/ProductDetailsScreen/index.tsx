import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import MainContainer from '../../components/MainContainer'
import ImageProduct from '../../assets/images/product_1.png'
import { colors, scale } from '../../styles'
import { useTranslation } from 'react-i18next'
import FlatButton from '../../components/FlatButton'
import ProductIcon from '../../components/ProductIcon'
import { useNavigation } from '@react-navigation/native'

const defaultProduct = {
  name: 'Antibrucelica Rosenbusch',
  indication: `Para la prevención de la Queratoconjuntivitis Infecciosa bovina y las distintas manifestaciones del Herpesvirus bovino tipo I.`,
  presentation:
    'Frascos-ampolla de 60 y 240 ml (20 y 80 dosis respectivamente).',
  dose_application:
    '3 ml por vía I.M. En la tabla del cuello. Vacunar con 2 dosis separadas entre sí por 30 días, después del destete o antes de la época de mayor incidencia de la enfermedad. Revacunar anualmente con 1 dosis. Venta Bajo Receta.',
  composition:
    ' Cultivo de Moraxella bovis y suspensión de virus de la Rinotraqueitis Infecciosa bovina (Herpes virus bovino I), inactivados y adsorbidos en hidróxido de aluminio con vitaminas A y E, con adyuvante oleoso',
  type: 'Queratoconjuntivitis',
  image: ImageProduct,
}

const styles = StyleSheet.create({
  firstPartContainer: { flexDirection: 'row' },
  image: {
    width: scale(4.598),
    height: scale(6.27),
  },
  firstPartInfo: {},
  name: {
    marginTop: scale(0.46),
    width: scale(4.137),
    fontWeight: '700',
    fontSize: scale(0.588),
    color: colors.primary(),
    marginBottom: scale(0.242),
  },
  inticationTitle: {
    color: colors.primary(),
    fontSize: scale(0.316),
    fontWeight: '700',
    lineHeight: scale(0.429),
  },
  indicationContent: {
    color: colors.primary(),
    fontSize: scale(0.242),
    fontWeight: '400',
    width: scale(4.566),
    lineHeight: scale(0.429),
  },
  secondPartContainer: {},
  infoContainer: {
    paddingLeft: scale(0.63),
  },
  lightBg: {
    backgroundColor: colors.light(0.6),
  },
  infoTitle: {
    color: colors.primary(),
    fontWeight: '700',
    fontSize: scale(0.46),
    marginVertical: scale(0.242),
  },
  infoContent: {
    color: colors.primary(),
    fontWeight: '400',
    fontSize: scale(0.27),
    marginBottom: scale(0.49),
    lineHeight: scale(0.36),
    width: scale(8.044),
  },
  buttonContainer: {
    position: 'absolute',
    bottom: scale(0.4),
    right: scale(1),
    left: scale(1),
    alignItems: 'center',
  },
  categoriesIconsContainers: { flexDirection: 'row' },
  categoryIcon: {
    marginRight: scale(0.049),
  },
})

const ProductDetailsScreen = ({ product = defaultProduct }) => {
  const navigation = useNavigation()
  const { t } = useTranslation()
  return (
    <MainContainer>
      <View style={styles.firstPartContainer}>
        <Image source={ImageProduct} resizeMode="cover" style={styles.image} />
        <View style={styles.firstPartInfo}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.inticationTitle}>{t('indication')}</Text>
          <Text style={styles.indicationContent}>{product.indication}</Text>
          <View style={styles.categoriesIconsContainers}>
            {[
              {
                code: 'vaccines',
              },
              {
                code: 'cows',
              },
            ].map(({ code }, key) => (
              <ProductIcon
                code={code}
                bordered
                key={key}
                style={styles.categoryIcon}
              />
            ))}
          </View>
        </View>
      </View>
      <View style={styles.secondPartContainer}>
        <View style={[styles.infoContainer, styles.lightBg]}>
          <Text style={styles.infoTitle}>{t('presentation')}</Text>
          <Text style={styles.infoContent}>{product.presentation}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>{t('dose_and_application')}</Text>
          <Text style={styles.infoContent}>{product.dose_application}</Text>
        </View>

        <View style={[styles.infoContainer, styles.lightBg]}>
          <Text style={styles.infoTitle}>{t('composition')}</Text>
          <Text style={styles.infoContent}>{product.composition}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>{t('type')}</Text>
          <Text style={styles.infoContent}>{product.type}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <FlatButton
          title={t('add_to_budget')}
          onPress={() => navigation.navigate('MyBudget')}
        />
      </View>
    </MainContainer>
  )
}
export default ProductDetailsScreen
