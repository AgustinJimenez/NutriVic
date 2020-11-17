export default ({ getState }) => {
    return (next: any) => (action: any) => {
        //console.log('REDUX-MIDDLEWARE dispatch', action)

        // Call the next dispatch method in the middleware chain.
        const returnValue = next(action)

        //console.log('REDUX-MIDDLEWARE state after dispatch', getState())

        // This will likely be the action itself, unless
        // a middleware further in chain changed it.
        return returnValue
    }
}
