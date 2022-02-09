import React from "react";
import {Button, Center, Flex, Grid, GridItem, Input, InputGroup, InputRightElement, Link, Text} from "@chakra-ui/react";

export const Login = () => {

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <Center p={5}>
            <Grid borderWidth='1px' borderRadius='lg' w={"md"} justifyContent={"center"}>
                <GridItem textAlign={"center"} p={10}>
                    <Text fontSize={"5xl"}>Cards</Text>

                    <Text fontSize={"3xl"}>Sign In</Text>
                </GridItem>

                <GridItem pt={5} pb={5}>
                    <Text fontSize={"2xl"}>Email</Text>
                    <Input type={"email"} variant={"filled"}/>
                    <Text fontSize={"2xl"}>Password</Text>
                    <InputGroup size='md'>
                        <Input
                            variant={"filled"}
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Flex direction={"row-reverse"} pt={5} pb={5}>
                        <Link color={"blue.300"}>Forgot Password?</Link>
                    </Flex>
                </GridItem>

                <Button colorScheme={"linkedin"}>Login</Button>
                <Center flexDir={"column"} p={10}>
                    <Text fontSize={"lg"}>Don't have an account?</Text>
                    <Link color={"blue.300"}>Sign Up</Link>
                </Center>
            </Grid>
        </Center>

    )
}