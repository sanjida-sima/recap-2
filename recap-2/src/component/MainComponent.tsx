import { use } from "react";
import FilterSection from "./FilterSection";
import JobSection from "./JobSection";
import Navbar from "./Navbar";
import type { JobsType } from "../types/JobsType";


type TtMainComponentProps = {
    jobsPromise : Promise<JobsType[]>
}
const MainComponent = ({ jobsPromise }:TtMainComponentProps) => {
    const JobsData = use(jobsPromise);
    console.log(JobsData)
    return (
        <>
           <Navbar />
      <FilterSection />
      <JobSection jobsData={JobsData} />
        </>
    );
};

export default MainComponent;