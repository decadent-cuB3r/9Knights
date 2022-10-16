import { Pressable, AspectRatio, Text, Box, VStack, Image } from "native-base";

const EventItem = ({ event, navigation }) => {
    const {
        Area,
        eventName,
        photo,
        date
    } = event;

    return (
        <Box w="50%" display="flex" flexDirection="row" shadow="3" color="white" borderRadius="2">
            <Pressable
            onPress={() => navigation .navigate('')}>
                <VStack>
                    <AspectRatio>
                        <Image source={{ uri: photo }} alt="route picture" width="155" />
                    </AspectRatio>
                    <Text>{Area}</Text>
                    <Text>{eventName}</Text>
                </VStack>
            </Pressable>
        </Box>
    )
}

export default EventItem;