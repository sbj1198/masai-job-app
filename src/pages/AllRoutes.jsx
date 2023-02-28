import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";
import { JobListing } from "./JobListing";
import { JobPosting } from "./JobPosting";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/job/list" element={<JobListing />} />
      <Route path="/job/post" element={<JobPosting />} />
    </Routes>
  );
};
