import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import FeedbackCheckBox from "../Components/FeedbackCheckBox";
import FeedbackModal from "../Components/FeedbackModal";

const feedbackParameter = [
  "Content Delivery",
  "Class Preparedness",
  "Content Quality",
];

function FeedbackForm() {
  const { onOpen } = useDisclosure();
  return (
    <Stack textAlign="left" px="120px" mt="34px" spacing={34}>
      <Flex justifyContent="space-between" w="100%">
        <Box>
          <Heading fontSize="30px" color="#567FBD">
            Daily Session Feedback Form
          </Heading>
        </Box>
        <Box>
          <Heading fontSize="30px" color="#567FBD">
            Date of Session: 07/10/2022
          </Heading>
        </Box>
      </Flex>
      <Box>
        <Text color="#8B7F7F" fontSize="30px">
          Please rate the instructor and on the following parameters:
        </Text>
      </Box>
      <HStack spacing={50}>
        <Box>
          <Stack>
            <Box>
              <Text fontSize="30px" as="ins">
                Instructor Name: Akhila
              </Text>
            </Box>
            <Box>
              <HStack my={8}>
                <Box w="110px" as="b"></Box>
                <Box px={20}>
                  <Stack direction="row" spacing={12}>
                    <Box>1</Box>
                    <Box>2</Box>
                    <Box>3</Box>
                    <Box>4</Box>
                    <Box>5</Box>
                  </Stack>
                </Box>
              </HStack>
              {feedbackParameter.map((el) => (
                <HStack my={8}>
                  <Box w="110px" as="b">
                    {el}
                  </Box>
                  <Box px={20}>
                    <FeedbackCheckBox />
                  </Box>
                </HStack>
              ))}
            </Box>
            <Stack spacing="20">
              <Box w="80%" as="b">
                Please add any comment that you wish to communicate regarding
                the Instructor session.
              </Box>
              <Input variant="flushed" placeholder="Your Answer" p={2} />
            </Stack>
          </Stack>
        </Box>
        <Box>
          <Stack>
            <Box>
              <Text fontSize="30px" as="ins">
                Mentor Name: Rajan
              </Text>
            </Box>
            <Box>
            <HStack my={8}>
                <Box w="110px" as="b"></Box>
                <Box px={20}>
                  <Stack direction="row" spacing={12}>
                    <Box>1</Box>
                    <Box>2</Box>
                    <Box>3</Box>
                    <Box>4</Box>
                    <Box>5</Box>
                  </Stack>
                </Box>
              </HStack>
              {feedbackParameter.map((el) => (
                <HStack my={8}>
                  <Box w="110px" as="b">
                    {el}
                  </Box>
                  <Box px={20}>
                    <FeedbackCheckBox />
                  </Box>
                </HStack>
              ))}
            </Box>
            <Stack spacing="20">
              <Box w="80%" as="b">
                Please add any comment that you wish to communicate regarding
                the Instructor session.
              </Box>
              <Input variant="flushed" placeholder="Your Answer" p={2} />
            </Stack>
          </Stack>
        </Box>
      </HStack>
      <Center>
        <FeedbackModal onOpen={onOpen} />
      </Center>
    </Stack>
  );
}

export default FeedbackForm;
