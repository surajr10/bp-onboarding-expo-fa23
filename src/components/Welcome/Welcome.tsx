import styles from './styles'
import { View, Text } from 'react-native'

const Welcome = () => {
    return (
        <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Welcome</Text>
        </View>
    )
}

export default Welcome