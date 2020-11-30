import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Icon } from 'native-base'
import { colors, scale } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: scale(3),
    backgroundColor: colors.light(0.2),
    marginVertical: scale(0.7),
    borderRadius: 8,
  },
  image: {
    //width: scale(2.293),
    //height: scale(3.561),
    width: scale(2.293),
    height: scale(4),
    marginBottom: -scale(0.4),
    alignSelf: 'flex-end',
  },
  infoContainer: {
    flex: 1,
    borderRadius: 2,
  },
  name: {
    color: colors.primary(),
    fontWeight: '700',
    fontSize: scale(0.47),
    marginVertical: 16.33,
  },
  inputsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: scale(0.3),
    bottom: scale(0.3),
    marginTop: scale(0.4),
  },
  quantity: {
    flex: 1,
    textAlign: 'right',
    color: colors.primary(),
    fontWeight: '700',
    fontSize: scale(0.3),
    paddingHorizontal: scale(0.4),
  },
  counterContainer: {
    flexDirection: 'row',
    borderRadius: 2,
    width: scale(2.38),
    backgroundColor: colors.light(),
    borderColor: colors.primary(0.16),
    borderWidth: 0.5,
  },
  counterTextContainer: {
    flex: 1,
    marginVertical: 1,
    paddingHorizontal: scale(0.1),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  counterText: {
    color: colors.primary(),
    fontWeight: '500',
    fontSize: scale(0.37),
  },
  counterIconContainer: {
    flex: 1,
    padding: scale(0.1),
  },
  counterIcon: {
    color: colors.primary(),
    fontSize: scale(0.6),
  },
  removeCross: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  removeCrossIcon: {
    fontSize: scale(0.5),
    color: colors.secondary(),
  },
})

const CounterInputs = ({ quantity = 0, onChange = (value: number) => {} }) => {
  const [counter, setCounter] = React.useState(quantity)
  const onCounterChange = React.useCallback(
    (type: string = 'plus' || 'minus') => {
      let newCount = counter
      switch (type) {
        case 'plus':
          newCount++
          break

        case 'minus':
          newCount--
          if (newCount < 0) newCount = 0
          break

        default:
          break
      }
      setCounter(newCount)
      onChange(newCount)
    },
    [counter]
  )

  return (
    <View style={styles.counterContainer}>
      <TouchableOpacity
        style={styles.counterIconContainer}
        onPress={() => onCounterChange('minus')}
      >
        <Icon name="minus" type="Entypo" style={styles.counterIcon} />
      </TouchableOpacity>
      <View style={styles.counterTextContainer}>
        <Text style={styles.counterText}>{counter}</Text>
      </View>
      <TouchableOpacity
        style={styles.counterIconContainer}
        onPress={() => onCounterChange('plus')}
      >
        <Icon name="plus" type="Entypo" style={styles.counterIcon} />
      </TouchableOpacity>
    </View>
  )
}

const RemoveButton = () => {
  return (
    <TouchableOpacity style={styles.removeCross}>
      <Icon name="cross" type="Entypo" style={styles.removeCrossIcon} />
    </TouchableOpacity>
  )
}

const BudgetListItem = ({ imageSource, name = '', quantify = 0 }: any) => {
  const { t } = useTranslation()
  return (
    <View style={styles.container}>
      <RemoveButton />
      <Image source={imageSource} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.inputsContainer}>
          <Text style={styles.quantity}>{t('quantity')}</Text>
          <CounterInputs quantify={quantify} onChange={(value: number) => {}} />
        </View>
      </View>
    </View>
  )
}

export default BudgetListItem
