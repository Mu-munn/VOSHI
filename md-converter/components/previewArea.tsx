import { Box } from "@chakra-ui/react";
import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

const PostPreview = (props) => {
  return (
    <Box w="50%" bg="" maxHeight="1000px" borderWidth='1px' borderRadius='lg' className='markdown-preview'>
      <div className="mdx_">
        <ReactMarkdown unwrapDisallowed={false}>
          {props.markdown}
        </ReactMarkdown>
      </div>

    </Box>
  );
};

export default PostPreview;