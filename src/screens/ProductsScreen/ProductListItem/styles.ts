import { StyleSheet } from 'react-native'
import global_styles, { colors, scale } from '../../../styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(242,242,242,1)',
    marginHorizontal: scale(0.242),
    marginVertical: scale(0.242),
    borderRadius: scale(0.121),
  },
  image: {
    width: '100%',
    height: scale(3.3),
    marginBottom: scale(0.42),
  },
  actionContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  name: {
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingHorizontal: scale(0.2),
    fontSize: scale(0.3),
    marginVertical: scale(0.15),
    ...global_styles.textPrimary,
  },
  categoryImageContainer: {
    width: scale(0.5),
    height: scale(0.5),
    backgroundColor: 'white',
    padding: scale(0.049),
    borderRadius: scale(0.049),
    marginLeft: scale(0.049),
  },
  categoryImagesContainer: {
    alignItems: 'flex-end',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  name_container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: scale(0.049),
  },
  button: {
    backgroundColor: colors.primary(),
    alignSelf: 'center',
    paddingVertical: scale(0.17),
    width: '100%',
    justifyContent: 'center',
    borderRadius: scale(0.099),
  },
  buttonText: {
    fontSize: scale(0.27),
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  infoContainer: { flexDirection: 'row', marginHorizontal: scale(0.121) },
  buttonContainer: {
    margin: scale(0.121),
  },
})
export default styles
