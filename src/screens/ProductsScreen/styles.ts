import { StyleSheet } from 'react-native'
import { scale } from '../../styles'

const styles = StyleSheet.create({
  image: {
    width: scale(1.6),
    height: scale(1.6),
    marginTop: scale(0.3),
    marginBottom: scale(0.3),
    alignSelf: 'center',
  },
  product: {
    width: scale(4.4),
  },
  productsList: {
    alignItems: 'center',
    paddingBottom: scale(8),
    marginTop: scale(0.45),
  },
  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: scale(2.3),
  },
})

export default styles
