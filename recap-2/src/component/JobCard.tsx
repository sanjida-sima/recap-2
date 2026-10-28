import type { JobsType } from "../types/JobsType";

type TJobCardProps = {
    job:JobsType;
}
const JobCard = ({job}:TJobCardProps) => {
    return (
        <div className="bg-base-100 card-sm shadow-sm p-4">
  <div className="">
    <div className="flex justify-between items-start gap-4">
        <div>
            <h2 className="card-title">{job.title}</h2>
    <p>{job.location}</p>
        </div>
        <p>
            {job.jobType}
        </p>
    </div>
    <div className=" flex justify-between items-center ">
        <p className="font-bold">{job.salaryRange}</p>
      <button className="btn btn-primary">Saved</button>
    </div>
  </div>
</div>
    );
};

export default JobCard;