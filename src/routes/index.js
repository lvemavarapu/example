import { Onboarding } from "../pages/Onboarding";
import Dashboard  from "../pages/Dashboard";
import Quiz  from "../pages/quiz";
import { StaffpersonalRecordDetails } from "../pages/StaffpersonalRecordDetails";

export const routes = [
  {
    path: "/dashboard",
    component: Dashboard
  },
  {
    path: "/onboarding",
    component: Onboarding
  },
  {
    path: "/overview/quiz",
    component: Quiz
  },
  {
    path: "/onboarding/staffpersonaldetails",
    component: StaffpersonalRecordDetails
  },

];
