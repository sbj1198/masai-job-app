import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getJobs } from "../redux/action";
import { JobCard } from "../components/JobCard";
import { Filter } from "../components/Filter";

export const JobListing = () => {
  const jobs = useSelector((store) => store.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobs());
  }, []);

  return (
    <>
      <Flex justifyContent="flex-end" pr="40px" pt="20px">
        <Filter />
      </Flex>
      <Box>
        {jobs.map((job) => {
          return <JobCard key={job.id} job={job} />;
        })}
      </Box>
    </>
  );
};
