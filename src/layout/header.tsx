import React from "react";
import {ColorModeSwitcher} from "../ColorModeSwitcher";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {initAuthStateType, LogOutThunk} from "../store/reducers/auth-reducer";
import {Button, ButtonGroup, Flex, Heading} from "@chakra-ui/react";

export const Header = () => {

    const dispatch = useDispatch()

    const {isLoggedIn} = useSelector<AppRootStateType, initAuthStateType>(state => state.auth)

    const logOut = () => {
        dispatch(LogOutThunk())
    }

    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} p={5}>
            <Heading>Cards</Heading>
            {isLoggedIn
                ?
                <div>
                    <ButtonGroup isAttached>
                        <Button mr={2} as={Link} to={'/profile'}>Profile</Button>
                        <ColorModeSwitcher />
                        <Button onClick={logOut}>Log Out</Button>

                    </ButtonGroup>
                </div>

                :
                <>
                    <ColorModeSwitcher variant={"solid"}/>
                </>

            }

        </Flex>
    )
}