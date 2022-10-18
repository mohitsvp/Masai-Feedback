import { Box, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function FeedbackBox() {
  const [date, setDate] = useState();

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    const formattedToday = dd + "/" + mm + "/" + yyyy;
    setDate(formattedToday);
  }, []);
  return (
    <Link to={`/feedback/1`}>
      <Flex
        bg="#80B6DE"
        h="91px"
        borderRadius="15px"
        alignItems="center"
        fontSize="35px"
        px={10}
        my="44px"
        w="796px"
      >
        <HStack>
          <Box>Daily Session Feedback Form - </Box>
          <Box>{date}</Box>
        </HStack>
      </Flex>
    </Link>
  );
}

export default FeedbackBox;
