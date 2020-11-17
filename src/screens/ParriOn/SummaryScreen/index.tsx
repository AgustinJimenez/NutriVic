import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import ParriOnContainer from '../../../components/ParriOnContainer'
import { colors, scale } from '../../../theme/variables/commonStyles'
import BottomNav from '../../../components/BottomNav'
import ImageMotorCow from '../../../assets/images/motor_cow.png'
import ImageRoad from '../../../assets/images/road.png'
import numberDotSeparator from '../../../utils/numberDotSeparator'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const styles = StyleSheet.create({
  onWay: {
    color: 'white',
    fontWeight: '700',
    fontSize: scale(),
    paddingStart: scale(0.3),
    paddingRight: scale(2.4),
    marginTop: scale(2.4),
    marginBottom: scale(0.4),
  },
  container: {
    backgroundColor: colors.brandSecondary,
    marginHorizontal: scale(0.3),
    borderRadius: scale(0.4),
    paddingVertical: scale(0.4),
  },
  productContainer: { flexDirection: 'row', paddingHorizontal: scale(0.6) },
  detailText: {
    flex: 1,
    fontSize: scale(0.38),
  },
  price: {
    flex: 0.4,
    textAlign: 'right',
    fontWeight: '700',
    fontSize: scale(0.4),
  },
  subContainer: {
    backgroundColor: colors.brandPrimary,
    flexDirection: 'row',
    marginHorizontal: scale(0.3),
    paddingHorizontal: scale(0.3),
    paddingVertical: scale(0.2),
    borderRadius: scale(0.4),
    marginTop: scale(0.3),
  },
  road: {
    width: '100%',
    height: scale(10),
    marginTop: scale(3),
  },
  motorCow: {
    alignSelf: 'flex-end',
    width: scale(6),
    height: scale(9),
    marginTop: -scale(12),
  },
  roadCowContainer: { alignSelf: 'flex-end' },
  colorSecondary: { color: colors.brandSecondary },
  totalContainer: {
    flex: 0.4,
    backgroundColor: colors.lightTransparentDeep,
    paddingHorizontal: scale(0.3),
    paddingVertical: scale(0.1),
    borderRadius: scale(0.1),
  },
})

const SummaryScreen = ({}) => {
  const products = [
    {
      id: 1,
      name: 'Costilla de cerdo',
      weight: 4,
      price: 320000,
    },
    {
      id: 2,
      name: 'Chorizo toscano',
      weight: 2,
      price: 44000,
    },
    {
      id: 3,
      name: 'Carbon especial',
      weight: null,
      count: 2,
      price: 22000,
    },
    {
      id: 4,
      name: 'Carbon especial',
      weight: null,
      count: 2,
      price: 22000,
    },
    {
      id: 4,
      name: 'Carbon especial',
      weight: null,
      count: 2,
      price: 22000,
    },
    {
      id: 5,
      name: 'Carbon especial',
      weight: null,
      count: 2,
      price: 22000,
    },
    {
      id: 6,
      name: 'Carbon especial',
      weight: null,
      count: 2,
      price: 32000,
    },
    {
      id: 7,
      name: 'Carbon especial',
      weight: null,
      count: 2,
      price: 25000,
    },
  ]

  return (
    <ParriOnContainer hasAvatar hasShoppingCart>
      <KeyboardAwareScrollView extraScrollHeight={-100}>
        <Text style={styles.onWay}>Tu pedido está en camino!</Text>
        <View style={styles.container}>
          {products.map((product: any, key: number) => {
            let details = ''

            if (product.weight)
              details = `${product.weight} kg. de ${product.name}`
            else details = `${product.count} paquetes de ${product.name}`

            return (
              <View style={styles.productContainer} key={key}>
                <Text style={styles.detailText}>{details}</Text>
                <Text style={styles.price}>{`${numberDotSeparator(
                  product.price
                )} Gs.`}</Text>
              </View>
            )
          })}

          <View style={styles.subContainer}>
            <View style={{ flex: 1 }}>
              <Text style={styles.colorSecondary}>En camino a</Text>
              <Text style={styles.colorSecondary}>
                Pitiantuta 237 c/ Mcal Lopez
              </Text>
            </View>
            <View style={styles.totalContainer}>
              <Text style={styles.colorSecondary}>Total</Text>
              <Text style={styles.colorSecondary}>
                {numberDotSeparator(386000)} Gs.
              </Text>
            </View>
          </View>
        </View>

        <Image source={ImageRoad} style={styles.road} resizeMode="stretch" />

        <Image
          source={ImageMotorCow}
          resizeMode="contain"
          style={styles.motorCow}
        />
      </KeyboardAwareScrollView>
      <BottomNav />
    </ParriOnContainer>
  )
}
export default SummaryScreen
