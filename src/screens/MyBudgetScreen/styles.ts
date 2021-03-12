import { StyleSheet } from 'react-native'
import { colors, scale } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(0.4),
  },
  myBudgetLabel: {
    position: 'absolute',
    color: colors.primary(),
    fontSize: scale(0.515),
    fontWeight: 'bold',
    textAlign: 'center',
    top: scale(0.8),
    right: 0,
    left: 0,
  },
  bottomButtonsGroup: {
    position: 'absolute',
    bottom: scale(0.8),
    right: scale(0.4),
    left: scale(0.4),
    alignItems: 'center',
  },
  rowButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomLightButton: {
    flex: 1,
    backgroundColor: colors.light(),
    paddingVertical: scale(0.3),
    borderRadius: scale(0.099),
    //marginHorizontal: scale(0.2),
  },
  bottomLightButtonText: {
    color: colors.primary(),
    fontWeight: '700',
    fontSize: scale(0.32),
    textAlign: 'center',
  },
  requestBudgetButton: {
    width: '100%',
    backgroundColor: colors.primary(),
    paddingVertical: scale(0.3),
    marginTop: scale(0.3),
    borderRadius: scale(0.099),
  },
  requestBudgetButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: scale(0.32),
    textAlign: 'center',
  },
  budgetList: {
    top: scale(1.5),
    paddingBottom: scale(7),
  },
  budgetListItem: {},
  noDataTxt: {
    marginVertical: scale(2),
  },
})
export default styles
