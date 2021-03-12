import * as React from 'react'

export const navigationRef: any = React.createRef()
export const isReadyRef: any = React.createRef()
export const navigate = (routeName: string, params?: any) => {
  navigationRef?.current?.navigate?.(routeName, params)
}
export const dispatch = (action: any) => {
  navigationRef?.current?.dispatch?.(action)
}
