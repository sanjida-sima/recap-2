import { use, useState } from "react";
import FilterSection from "./FilterSection";
import JobSection from "./JobSection";
import Navbar from "./Navbar";
import type { JobsType } from "../types/JobsType";

type TtMainComponentProps = {
  jobsPromise: Promise<JobsType[]>;
};
const MainComponent = ({ jobsPromise }: TtMainComponentProps) => {
  const JobsData = use(jobsPromise);

  const [savedJobs, setSavedJobs] = useState<JobsType[]>([]);

  return (
    <>
      <Navbar savedJobs={savedJobs}/>
      <FilterSection />
      <JobSection
        jobsData={JobsData}
        savedJobs={savedJobs}
        setSavedJobs={setSavedJobs}
      />
    </>
  );
};

export default MainComponent;
