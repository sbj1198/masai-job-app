import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getJobs } from "../redux/action";
import { JobCard } from "../components/JobCard";

export const JobListing = () => {
  const jobs = useSelector((store) => store.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobs());
  }, []);

  return (
    <Box>
      {jobs.map((job) => {
        return <JobCard job={job} />;
      })}
    </Box>
  );
};
