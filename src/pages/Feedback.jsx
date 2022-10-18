import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import FeedbackBox from "../Components/FeedbackBox";

function Feedback() {
  return (
    <Box textAlign="left" px="120px" mt="34px" w="80%">
      <Box>
        <Box>
          <Heading fontSize="35px">Welcome to the Feedback section </Heading>
        </Box>
        <Box mt="17px">
          <Text fontSize="19px">
            Feedback is a powerful development lever in the workplace. It helps
            us to understand our strengths and weaknesses, and how to perceive
            them- so that we can become the best versions of ourselves
          </Text>
        </Box>
        <Box>
          <Box mt="34px">
            <Text color="#0429ED" as="b" fontSize="25px">Pending Feedbacks</Text>
          </Box>
          <Box w="80%">
            <FeedbackBox/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Feedback;


