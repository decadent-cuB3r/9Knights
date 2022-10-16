import { Image, Box, Text, Heading, Circle, Input, Button, Center } from "native-base";

const LoginScreen = () => {
const Logo = require("../assets/icon.png");

    return (
        <Box position="relative">
            <Circle position="absolute" size="400px" bg="#ECECEC" top="0px" left="150px"></Circle>
            <Circle position="absolute" size="400px" bg="#ECECEC" top="400px" right="200px"></Circle>
            <Center>
                <Image source={require('../assets/Icon.png')}  alt="app logo"/>
            </Center>
        </Box>
    );
};

export default LoginScreen;