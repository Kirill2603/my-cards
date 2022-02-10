import React from "react";
import {Box, Button, Center, Flex, Input, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";

export const Forgot = () => {
    return (
        <Center p={5}>
            <Flex borderWidth='1px' borderRadius='lg' w={"md"} justifyContent={"center"} flexDirection={"column"}>
                <Box textAlign={"center"} p={10}>
                    <Text fontSize={"5xl"}>Cards</Text>
                    <Text fontSize={"3xl"}>Forgot your password?</Text>
                </Box>

                <Box>
                    <Center flexDir={"column"} p={10}>
                        <Text fontSize={"2xl"}>Email</Text>
                        <Input type={"email"} variant={"filled"}/>
                        <Text fontSize={"lg"}>Enter your email address and we will send you further instructions</Text>
                    </Center>

                </Box>


                <Flex justifyContent={"center"} p={5}>
                    <Button colorScheme={"linkedin"}>Send instructions</Button>
                </Flex>

                <Center flexDir={"column"} p={10}>
                    <Text fontSize={"lg"}>Didi you remember your password?</Text>
                    <Button as={Link} to={'/login'} variant={"link"} color={"blue.300"}>Try logging in</Button>
                </Center>

            </Flex>
        </Center>
    )
}