import * as React from 'react'

export const navigationRef: any = React.createRef()
export const isReadyRef: any = React.createRef()
export const navigate = (routeName: string, params: any) => {
    if (isReadyRef.current && navigationRef.current) navigationRef.current.navigate(routeName, params)
}

export const dispatch = (action: any) => {
    if (isReadyRef.current && navigationRef.current) {
        navigationRef.current.dispatch(action)
    }
}
