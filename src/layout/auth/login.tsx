import React, {ChangeEvent, useState} from "react";
import {
    Box,
    Button,
    Center, Checkbox,
    Flex,
    Input,
    InputGroup,
    InputRightElement,
    Text
} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {initAuthStateType, LoginThunk} from "../../store/reducers/auth-reducer";
import {Link, Navigate} from "react-router-dom";
import {AppRootStateType} from "../../store/store";

export const Login = () => {
    const dispatch = useDispatch()
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const {isLoggedIn, loggedInError} = useSelector<AppRootStateType, initAuthStateType>(state => state.auth)

    console.log(isLoggedIn + '   ' + loggedInError)

    const [email, setEmail] = useState<string>('nya-admin@nya.nya')
    const [password, setPassword] = useState<string>('1qazxcvBG')
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    const changeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)
    const changePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)
    const changeRememberMe = (e: ChangeEvent<HTMLInputElement>) => setRememberMe(!rememberMe)
    const login = () => {
        dispatch(LoginThunk({email, password, rememberMe}))
    }

    if(isLoggedIn) {
        return <Navigate to={'/cards'}/>
    } else return (
        <>

        <Center p={5}>
            <Flex borderWidth='1px' borderRadius='lg' w={"md"} justifyContent={"center"} flexDirection={"column"}>

                <Box textAlign={"center"} p={10}>
                    <Text fontSize={"5xl"}>Cards</Text>
                    <Text fontSize={"3xl"}>Sign In</Text>
                </Box>

                <Box pl={10} pr={10}>
                    <Text fontSize={"2xl"}>Email</Text>
                    <Input type={"email"} variant={"filled"} value={email} onChange={changeEmail}/>
                    <Text fontSize={"2xl"}>Password</Text>
                    <InputGroup size='md'>
                        <Input
                            value={password}
                            onChange={changePassword}
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
                        <Checkbox defaultIsChecked={rememberMe} onChange={changeRememberMe}>Remember Me</Checkbox>
                    </Flex>
                    <Flex direction={"row-reverse"}>
                        <Button as={Link} to={'/forgot'} variant={"link"} color={"blue.300"}>Forgot Password?</Button>
                    </Flex>
                </Box>

                <Flex justifyContent={"center"} p={5}>
                    <Button
                        onClick={login}
                        colorScheme={"linkedin"}>Login</Button>
                </Flex>
                <Center flexDir={"column"} pb={10}>
                    <Text fontSize={"lg"}>Don't have an account?</Text>
                    <Button as={Link} to={'/register'} variant={"link"} color={"blue.300"}>Sign Up</Button>
                </Center>
            </Flex>
        </Center>
        </>
    )
}