import "../styles/dasboard.css";
import onboarding from "../assets/onboarding.jpg"
import React, { useEffect, useState } from 'react';
import {Link, useNavigate,NavLink} from "react-router-dom";



function Dashboard() {
    return (
        <>
            <h4> welcome to our Employee Portal</h4>
            <h5> Hey David</h5>
            <div className={"dashboard-page"}>
                <h4> Attention Required</h4>
            <div className={"onboarding"}>
                    <img src ={onboarding} width={600} height={400} alt={"onboarding"} />
                <div className={"items-onboarding"}>
                    <h4>Onboarding</h4>
                        <li> <NavLink to="/onboarding" >Onboarding</NavLink><br/></li>
                </div>
            </div>
                <div className={"onboarding"}>
                    <img src ={onboarding} width={600} height={400} />
                    <div className={"items-onboarding"}>
                        <h4>Onboarding</h4>
                        <ul>
                            <li> <Link to="/onboarding/StaffPersonalRecord">Staff</Link><br/></li>
                            <li> <Link to="/onboarding/StaffPersonalRecord">Staff</Link><br/></li>
                            <li> <Link to="/onboarding/StaffPersonalRecord">Staff</Link><br/></li>
                        </ul>
                    </div>
                </div>
                <div className="calendar">
                    <h3>Reminders</h3>
                    <li> <NavLink to="/calendar" activeClassName="focus">Calendar</NavLink><br/></li>

                </div>
            </div>
          
            </>


                      );
}
export default Dashboard;