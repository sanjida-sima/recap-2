import type { JobsType } from "../types/JobsType";
import JobCard from "./JobCard";
import SavedJobCard from "./SavedJobCard";

type TtMainSectionProps = {
  jobsData: JobsType[];
  savedJobs: JobsType[];
  setSavedJobs: React.Dispatch<React.SetStateAction<JobsType[]>>;
};

const JobSection = ({
  jobsData,
  savedJobs,
  setSavedJobs,
}: TtMainSectionProps) => {
  const handleSavedJob = (job: JobsType) => {
    console.log(job);
    const filterJobs =savedJobs.filter(el =>el.id!==job.id);

    const updatedJobs = [...filterJobs, job];
    setSavedJobs(updatedJobs);
  };
  console.log(savedJobs);

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
            <JobCard job={item} handleSavedJob={handleSavedJob} />
          ))}
        </div>
      </div>

      {/* saved jobs */}
      <div className="w-1/4">
        <div className="flex justify-between items-center">
          <h2 className="font-bold">saved jobs</h2>
          <p className="text-slate-400">6 saved</p>
        </div>
        <div className="space-y-2">
          {
            savedJobs.map((item)=>(
              <SavedJobCard savedJob={item} />
            ))}
        
          
        </div>
      </div>
    </div>
  );
};

export default JobSection;
