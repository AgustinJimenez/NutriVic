export default (str: string = '', {excludeWordWithLength = 2, firstOnly = false} = {}) => {
    let splitStr = str.toLowerCase().split(' ')
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        if (splitStr[i].length > excludeWordWithLength) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
            if(firstOnly)
                break;
                
        } else splitStr[i] = splitStr[i]
    }
    // Directly return the joined string
    return splitStr.join(' ')

    return ''
}
