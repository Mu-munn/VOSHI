import { Box } from "@chakra-ui/react";
import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

const PostPreview = (props) => {
  return (
    // <div className="h-full w-full mr-10">
    //   <div className="markdown-preview h-full w-full border shadow-xl mb-5 rounded-xl py-4 px-2 overflow-y-scroll bg-white">
    //     <ReactMarkdown unwrapDisallowed={false}>
    //       {props.markdown}
    //     </ReactMarkdown>
    //   </div>
    // </div>
    <Box w="50%" bg="" minHeight="500px" borderWidth='1px' borderRadius='lg' className='markdown-preview'>
      <ReactMarkdown unwrapDisallowed={false}>
        {props.markdown}
      </ReactMarkdown>
    </Box>
  );
};

export default PostPreview;