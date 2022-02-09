import React from "react";
import {Button, Center, Flex, Grid, GridItem, Input, InputGroup, InputRightElement, Link, Text} from "@chakra-ui/react";

export const Registration = () => {
  const [showPas, setShowPas] = React.useState(false)
  const [showConfirm, setShowConfirm] = React.useState(false)
  const handleClickPas = () => setShowPas(!showPas)
  const handleClickConfirm = () => setShowConfirm(!showConfirm)

  return (
      <Center p={5}>
        <Grid borderWidth='1px' borderRadius='lg' w={"md"} justifyContent={"center"}>
          <GridItem textAlign={"center"} p={10}>
            <Text fontSize={"5xl"}>Cards</Text>

            <Text fontSize={"3xl"}>Sign Up</Text>
          </GridItem>

          <GridItem pt={5} pb={5}>
            <Text fontSize={"2xl"}>Email</Text>
            <Input type={"email"} variant={"filled"}/>
            <Text fontSize={"2xl"}>Password</Text>
            <InputGroup size='md'>
              <Input
                  variant={"filled"}
                  pr='4.5rem'
                  type={showPas ? 'text' : 'password'}
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClickPas}>
                  {showPas ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Text fontSize={"2xl"}>Confirm password</Text>
            <InputGroup size='md'>
              <Input
                  variant={"filled"}
                  pr='4.5rem'
                  type={showConfirm ? 'text' : 'password'}
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClickConfirm}>
                  {showConfirm ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </GridItem>

          <Flex justifyContent={"space-between"} pt={10} pb={10}>
            <Button w={'40%'} colorScheme={"gray"}>Cancel</Button>
            <Button w={'40%'} colorScheme={"linkedin"}>Register</Button>
          </Flex>

        </Grid>
      </Center>
  )
}