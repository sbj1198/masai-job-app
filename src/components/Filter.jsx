import { Box, Flex, Select, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { getJobs } from "../redux/action";
import { useEffect, useState } from "react";

export const Filter = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const getFilteredData = () => {
    dispatch(getJobs(filter));
  };

  useEffect(() => {
    getFilteredData();
  }, [filter]);

  return (
    <Box>
      <Flex alignItems="center">
        <Text flexBasis="7rem" mr="8px">
          Filter by:
        </Text>
        <Select
          placeholder="Role"
          borderColor="teal"
          value={filter}
          onChange={handleChange}
          flexBasis="13rem"
          cursor="pointer"
        >
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">FullStack</option>
        </Select>
      </Flex>
    </Box>
  );
};
