
import { FaRegBookmark } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className="max-lg:collapse bg-base-200 lg:mb-4 shadow-sm w-full rounded-md">
  <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
  <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
  <div className="collapse-title navbar">
    <div className="navbar-start">
      <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <div>
        <p className='font-bold text-2xl text-slate-700'>Dev<span className='text-amber-900'>Jobs</span></p>
      </div>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
       <li>
        <a href="#">Browse</a>
       </li>
       <li>
        <a href="#">Company</a>
       </li>
       <li>
        <a href="#">Salaries</a>
       </li>
       <li>
        <a href="#">Post A Job</a>
       </li>
      </ul>
    </div>
    <div className="navbar-end">
     <button className="btn btn-neutral"><FaRegBookmark /> Saved Jobs.2</button>
    </div>
  </div>

  <div className="collapse-content lg:hidden z-1">
    <ul className="menu">
       <li>
        <a href="#">Browse</a>
       </li>
       <li>
        <a href="#">Company</a>
       </li>
       <li>
        <a href="#">Salaries</a>
       </li>
       <li>
        <a href="#">Post A Job</a>
       </li>
    </ul>
  </div>
</div>
  );
};

export default Navbar;

