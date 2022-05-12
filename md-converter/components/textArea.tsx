import { Box, Textarea, Text, HStack, VStack, Flex } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import PostPreview from "./previewArea";

export default function PostForm() {
    const [markdown, setMarkdown] = useState();

    const setData = (e: any) => {
        e.preventDefault();

        setMarkdown(e.target.value);
    };
    return (
        <Flex w="92%" wrap="wrap" margin="0 auto" bg="white" className="mdx">
            {/* <Box w="100%" > */}
                <Textarea
                    h="90vh"
                    placeholder='ここにマークダウン書いてね！'
                    value={markdown}
                    onChange={setData}
                    w="50%"
                />
                <PostPreview markdown={markdown} />
            {/* </Box> */}
        </Flex>


    );
}