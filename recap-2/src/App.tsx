
import { Suspense } from "react";
import MainComponent from "./component/MainComponent";
import type { JobsType } from "./types/JobsType";






const jobsPromise:Promise<JobsType[]> = fetch('https://raw.githubusercontent.com/NS-Sheam/react-fundamental-recap/refs/heads/main/public/jobs.json').then((res) => res.json())

const App = () => {
console.log(jobsPromise)

  return (
    <div>
      {/* navbar */}
      <Suspense fallback ={<p>Loading...</p>}></Suspense>
      <MainComponent jobsPromise ={jobsPromise}/>
    
    </div>
  );
};

export default App;