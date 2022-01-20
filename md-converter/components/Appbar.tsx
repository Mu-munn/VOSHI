import { Box, Button, Center, Divider, Flex, Heading, Stack } from "@chakra-ui/react";

export default function Appbar() {
    return (
        <>
            <Stack zIndex="sticky" position="sticky" top="0">
                <Flex w="100%" h="50px" bg="white"  >

                    <Center w="25%" h="100%">
                        <Heading size="sm">マークダウンくん</Heading>
                    </Center>

                    <Box w="25%" h="100%" p={2}>
                        <Button colorScheme='teal' size='md'>
                            テンプレート
                        </Button>
                    </Box>
                    <Box w="25%" h="100%"></Box>
                    <Box w="25%" h="100%"></Box>

                </Flex>
                <Divider></Divider>
            </Stack>

        </>
    )
}