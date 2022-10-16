import React from "react";
import { Box, Text, Center, VStack, HStack } from 'native-base';
import events from "../json/events.json";
import EventList from "../components/eventList";

const HomeScreen = ({ navigation }) => {
    return(
        <EventList list={events.Events} navigation={navigation}/>
    )
}

export default HomeScreen;