import { Badge, Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export const JobCard = ({ job }) => {
  //   console.log(job);
  return (
    <Box p="40px 120px">
      <Flex
        boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
        alignItems="center"
      >
        <Box w="20%">
          <Flex alignItems="center">
            <Image
              borderRadius="full"
              boxSize="200px"
              src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"
            />
          </Flex>
        </Box>
        <Box w="45%">
          <Flex flexDirection="column">
            <Box>
              <Text mb="20px" fontWeight="bold" color="teal">
                {job.company.charAt(0).toUpperCase() + job.company.slice(1)}
              </Text>
            </Box>
            <Box>
              <Heading size="sm" mb="20px">
                {job.position.charAt(0).toUpperCase() + job.position.slice(1)}
              </Heading>
            </Box>
            <Box>
              <Flex alignItems="center">
                <Text mr="20px" color="gray" fontWeight="semi-bold">
                  {job.postedAt}
                </Text>
                <Text mr="20px" color="gray" fontWeight="semi-bold">
                  {job.contract.charAt(0).toUpperCase() + job.contract.slice(1)}
                </Text>
                <Text mr="20px" color="gray" fontWeight="semi-bold">
                  {job.location.charAt(0).toUpperCase() + job.location.slice(1)}
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box w="30%">
          <Flex justifyContent="flex-end">
            <Badge
              variant="subtle"
              colorScheme="teal"
              mr="10px"
              borderRadius="5px"
            >
              {job.role}
            </Badge>
            <Badge
              variant="subtle"
              colorScheme="teal"
              mr="10px"
              borderRadius="5px"
            >
              {job.level}
            </Badge>
            <Badge
              variant="subtle"
              colorScheme="teal"
              mr="10px"
              borderRadius="5px"
            >
              {job.language}
            </Badge>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
