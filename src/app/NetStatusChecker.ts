import { useEffect } from 'react'
import NetInfo from '@react-native-community/netinfo'
import { updatNetworkStatusAction } from '../sagas/actions'
import { useDispatch } from 'react-redux'

const NetStatusChecker = ({}) => {
  //console.log('NetStatusChecker ===> ', { props })
  const dispatch = useDispatch()
  useEffect(() => {
    //console.log('NetStatusChecker ===> ', { props })
    NetInfo.addEventListener((network: any) => {
      dispatch(updatNetworkStatusAction(network))
    })
  }, [])

  return null
}

export default NetStatusChecker
