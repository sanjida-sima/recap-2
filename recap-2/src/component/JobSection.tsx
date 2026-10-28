import type { JobsType } from "../types/JobsType";
import JobCard from "./JobCard";

type TtMainSectionProps = {
  jobsData: JobsType[];
};

const JobSection = ({ jobsData }: TtMainSectionProps) => {
  return (
    <div className="container mx-auto flex justify-between gap-6">
      {/* latest section */}
      <div className="w-3/4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold">latest jobs</h3>
          <p className="text-slate-400">6 roles found</p>
        </div>
        <div className=" grid grid-cols-2 gap-3">
          {jobsData.map((item) => (
            <JobCard job={item} />
          ))}
        </div>
      </div>

      {/* saved jobs */}
      <div className="w-1/4">
        <div className="flex justify-between items-center">
          <h2 className="font-bold">saved jobs</h2>
          <p className="text-slate-400">6 saved</p>
        </div>
      </div>
    </div>
  );
};

export default JobSection;
