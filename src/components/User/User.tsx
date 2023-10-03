import { View, Text } from 'react-native'
interface UserTextroTexts {
    name: string;
    maker: string;
}

const User: React.FC<UserTextroTexts> = ({name, maker}) => {
    return (
        <View>
            <Text>Name</Text>
            <Text>{name}</Text>
            <Text>Maker</Text>
            <Text>{maker}</Text>
        </View>
    )
}

export default User