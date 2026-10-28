import type { JobsType } from "../types/JobsType";


type TSavedJobProps={
    savedJob :JobsType;

}
const SavedJobCard = ({savedJob}:TSavedJobProps) => {
    return (
       <div className="bg-base-100 card-sm shadow-sm p-4 ">
      <div className="">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h2 className="card-title">{savedJob.title}</h2>
            <p>{savedJob.location}</p>
          </div>
         
        </div>
        <div className=" flex justify-between items-center ">
        
          <button className="btn btn-soft btn-warning w-full">Remove</button>
        </div>
      </div>
    </div>
    );
};

export default SavedJobCard;