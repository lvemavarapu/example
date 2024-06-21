import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Onboarding } from "./pages/Onboarding";
import Dashboard  from "./pages/Dashboard";

import { StaffpersonalRecordDetails } from "./pages/StaffpersonalRecordDetails";
export default function App() {
  
  
  
  // console.log(router);
  return (
    <>
    
    <Router>
    <Sidebar />
        <Routes>
          
        <Route path="/dashboard"exact element={<Dashboard />} /> 
        <Route path="/oboarding" element={<Onboarding />}/>
        <Route path="/onboarding/staffpersonalrecord" element={<StaffpersonalRecordDetails />}/>
       
        </Routes>
      </Router>
    </>
  );
}