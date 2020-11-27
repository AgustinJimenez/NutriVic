import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import MainContainer from '../../components/MainContainer'
import ImageProduct from '../../assets/images/product_1.png'

const product = {
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

const ProductDetailsScreen = ({}) => {
  return <MainContainer></MainContainer>
}
export default ProductDetailsScreen
