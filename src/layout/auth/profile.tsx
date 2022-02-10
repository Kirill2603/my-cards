import React, {useEffect} from "react";
import {Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {initAuthStateType, UserInfoThunk} from "../../store/reducers/auth-reducer";
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Text
} from "@chakra-ui/react";

export const Profile = () => {

  const {isLoggedIn, userName, userMail} = useSelector<AppRootStateType, initAuthStateType>(state => state.auth)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(UserInfoThunk())
  }, [dispatch])

  if(!isLoggedIn) {
    return <Navigate to={'/login'}/>
  } else return (
      <Center p={5}>
        <Flex borderWidth='1px' borderRadius='lg' w={"md"} justifyContent={"center"} flexDirection={"column"}>
          <Box textAlign={"center"} p={10}>
            <Text fontSize={"3xl"}>Personal information</Text>
          </Box>

          <Box pl={10} pr={10}>
            <Flex pb={5} justifyContent={"center"}>
              <Avatar size='2xl' name={userName} src='https://bit.ly/sage-adebayo' />{' '}
            </Flex>
            <Text>Nickname</Text>
            <Text fontSize={"3xl"}>{userName}</Text>
            <Text>Email</Text>
            <Text fontSize={"3xl"}>{userMail}</Text>
          </Box>

          <Flex p={10} justifyContent={"center"}>
            <Button colorScheme={"linkedin"}>Edit</Button>
          </Flex>

        </Flex>
      </Center>
  )
}