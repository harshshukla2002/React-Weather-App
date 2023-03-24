import { Box, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { RiSearch2Fill } from "react-icons/ri";

const Search = ({ SetSearchingValue }) => {
  const [value, setValue] = useState("");
  return (
    <Box
      alignItems={"center"}
      w="60%"
      margin={"auto"}
      border="1px solid teal"
      mt="30px"
      p="20px"
    >
      <Text textAlign={"left"} fontSize={"2xl"} m="0px 10px">
        Location
      </Text>
      <Flex alignItems={"center"} p="10px" justifyContent={"space-around"}>
        <Box>
          <Input
            m="10px"
            w="700px"
            placeholder="Enter City"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Box>
        <RiSearch2Fill
          size="30px"
          style={{ margin: "20px", cursor: "pointer" }}
          _hover={{ color: "red" }}
          onClick={() => {
            SetSearchingValue(value);
            setValue("");
          }}
        />
      </Flex>
    </Box>
  );
};

export default Search;
