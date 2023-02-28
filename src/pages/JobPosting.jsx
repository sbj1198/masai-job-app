import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postJobs } from "../redux/action";

export const JobPosting = () => {
  const dispatch = useDispatch();
  const [jobDetails, setJobDetails] = useState({
    company: "",
    postedAt: "",
    city: "",
    location: "",
    role: "",
    level: "",
    contract: "",
    position: " ",
    language: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({
      ...jobDetails,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    dispatch(postJobs(jobDetails));
    setJobDetails({
      company: "",
      postedAt: "",
      city: "",
      location: "",
      role: "",
      level: "",
      contract: "",
      position: " ",
      language: "",
    });
  };

  return (
    <Box maxW="450px" margin="auto" mt="20px">
      {/* <Text fontSize="3xl" textAlign="center" mt="10px">
        Job Listing
      </Text> */}
      <Flex
        flexDirection="column"
        boxShadow="rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px"
        p="20px 60px"
      >
        <Input
          type="text"
          name="company"
          value={jobDetails.company}
          onChange={handleChange}
          placeholder="Company name"
          mb="10px"
        />
        <Input
          type="text"
          name="city"
          value={jobDetails.city}
          onChange={handleChange}
          placeholder="City name"
          mb="10px"
        />
        <Input
          type="text"
          name="location"
          value={jobDetails.location}
          onChange={handleChange}
          placeholder="Location"
          mb="10px"
        />
        <Select
          name="role"
          placeholder="Role"
          mb="10px"
          value={jobDetails.role}
          onChange={handleChange}
        >
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">FullStack</option>
        </Select>
        <Select
          name="level"
          placeholder="Level"
          mb="10px"
          value={jobDetails.level}
          onChange={handleChange}
        >
          <option value="junior">Junior</option>
          <option value="senior">Senior</option>
        </Select>
        <Select
          placeholder="Position"
          name="position"
          mb="10px"
          value={jobDetails.position}
          onChange={handleChange}
        >
          <option value="backend developer">Backend Developer</option>
          <option value="junior frontend developer">
            Junior Frontend Developer
          </option>
          <option value="junior backend developer">
            Junior Backend Developer
          </option>
          <option value="fsd">FSD</option>
        </Select>
        <Select
          name="language"
          placeholder="Language"
          mb="10px"
          value={jobDetails.language}
          onChange={handleChange}
        >
          <option value="javascript">JavaScript</option>
          <option value="java">Java</option>
          <option value="c">C</option>
          <option value="cplusplus">C++</option>
        </Select>
        <Select
          name="contract"
          placeholder="Contract"
          mb="10px"
          value={jobDetails.contract}
          onChange={handleChange}
        >
          <option value="fulltime">Full time</option>
          <option value="parttime">Part time</option>
        </Select>
        <Input
          name="postedAt"
          value={jobDetails.postedAt}
          onChange={handleChange}
          placeholder="Select Date"
          size="md"
          type="date"
          mb="10px"
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </Flex>
    </Box>
  );
};
