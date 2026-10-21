import FilterSection from "./component/FilterSection";
import JobSection from "./component/JobSection";
import Navbar from "./component/Navbar";



const App = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      <FilterSection />
      <JobSection />
      
    </div>
  );
};

export default App;