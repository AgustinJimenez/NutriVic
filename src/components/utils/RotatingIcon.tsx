import React from 'react'
import { Animated, Easing } from 'react-native'
import { Icon } from 'native-base'


const RotatingIcon = ({ name, type, style }: any) => {
    const [spinValue, setspinValue] = React.useState(new Animated.Value(0))

    let refIcon = React.useRef(null)
    // First set up animation
    React.useEffect(() => {
        let animation = Animated.timing(spinValue, {
            toValue: 2,
            duration: 3000,
            easing: Easing.linear,
            useNativeDriver: true,
        })
        Animated.loop(animation, {
            iterations: -1,
        }).start()
    }, [])

    // Second interpolate beginning and end values (in this case 0 and 1)
    let spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    })
    return (
        <Animated.View ref={refIcon} style={{ transform: [{ rotate: spin }] }}>
            <Icon name={name} type={type} style={style} />
        </Animated.View>
    )
}

export default 
