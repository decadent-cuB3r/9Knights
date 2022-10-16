import { FlatList } from "native-base";
import EventItem from "./eventItem";

const EventList = ({list, navigation}) => {
    const renderItem = ({ item }) => <EventItem event={item} navigation={navigation} />;
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={list}
            renderItem={renderItem}
            keyExtractor={list => list.ID}
            numColumns={2}
        />
    );
};

export default EventList;