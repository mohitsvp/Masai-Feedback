import { Box, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import React from "react";

function FeedbackCheckBox() {
  const [value, setValue] = React.useState("");
  return (
    <Box>
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction="row" spacing={10}>
          <Radio value="1"></Radio>
          <Radio value="2"></Radio>
          <Radio value="3"></Radio>
          <Radio value="4"></Radio>
          <Radio value="5"></Radio>
        </Stack>
      </RadioGroup>
    </Box>
  );
}

export default FeedbackCheckBox;
