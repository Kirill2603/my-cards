import React from "react";
import {Button, Center, Flex, Grid, GridItem, Input, Link, Text} from "@chakra-ui/react";

export const Forgot = () => {
    return (
        <Center p={5}>
          <Grid borderWidth='1px' borderRadius='lg' w={"md"} justifyContent={"center"}>
                <GridItem textAlign={"center"} p={10}>
                    <Text fontSize={"5xl"}>Cards</Text>
                    <Text fontSize={"3xl"}>Forgot your password?</Text>
                </GridItem>

                <GridItem>
                 <Center flexDir={"column"} p={10}>
                   <Text fontSize={"2xl"}>Email</Text>
                   <Input type={"email"} variant={"filled"}/>
                   <Text fontSize={"lg"}>Enter your email address and we will send you further instructions</Text>
                 </Center>

                </GridItem>


                <Flex justifyContent={"center"} p={5}>
                    <Button colorScheme={"linkedin"}>Send instructions</Button>
                </Flex>

                <Center flexDir={"column"} p={10}>
                    <Text fontSize={"lg"}>Didi you remember your password?</Text>
                    <Link color={"blue.300"}>Try logging in</Link>
                </Center>

            </Grid>
        </Center>
    )
}