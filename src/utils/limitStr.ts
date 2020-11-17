const limitStr = (str: string = '', limit: number = 50) => {
    if (!!str && !!str.length && str.length >= limit) return str.substring(0, limit) + '...'

    return str
}
export default limitStr
