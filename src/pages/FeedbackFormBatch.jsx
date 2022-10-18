import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Select,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons"
import React from "react";
import FeedbackTable from "../Components/FeedbackTable";

function FeedbackFormBatch() {
  return (
    <Box px="120px" mt="34px">
      <VStack spacing={20}>
        <Flex w="full">
          <Box>
            <Select placeholder="Select option">
              <option value="PT-WEB-06">PT-WEB-06</option>
              <option value="PT-WEB-07">PT-WEB-07</option>
              <option value="PT-WEB-08">PT-WEB-08</option>
            </Select>
          </Box>
          <Spacer />
          <HStack>
            <Box>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="date"
              />
            </Box>
            <Box>
                <Text>To</Text>
            </Box>
            <Box>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="date"
              />
            </Box>
            <Box>
                <Button bg="#A6C7F8">
                    <SearchIcon/>
                </Button>
            </Box>
          </HStack>
        </Flex>
        <Box w="100%">
            <FeedbackTable/>
        </Box>
      </VStack>
    </Box>
  );
}

export default FeedbackFormBatch;
