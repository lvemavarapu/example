import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { MdOutlineDashboard } from "react-icons/md";
import {AiFillCalendar} from "react-icons/ai";

export const SidebarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        // icon: <AiIcons.AiFillHome />,
        icon: <MdOutlineDashboard />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    },
    {
        title: "Onboarding",
        path: "/onboarding",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Staff Personal Record",
                path: "/onboarding/StaffPersonalRecord",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Id Card acknowledgement",
                path: "/Onboarding/IdentificationCardacknowledgement",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Authority to publish photo",
                path: "/Onboarding/Authority-to-publish-photo",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Code of Conduct Agreement",
                path: "/onboarding/code-of-conduct-agreement",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Company Car Policy",
                path: "/onboarding/company-car-policy",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },
    {
        title: "Induction",
        path: "/induction",
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Timesheet training",
                path: "/induction/timesheet-training",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "Induction Presentation",
                path: "/induction/presentation",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "Android Phone",
                path: "induction/phone",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },
    {
        title: "Quiz",
        path: "/quiz",
        icon: <FaIcons.FaCartPlus />,
    },
    {
        title: "Team",
        path: "/team",
        icon: <IoIcons.IoMdPeople />,
    },
    {
        title: "Messages",
        path: "/messages",
        icon: <FaIcons.FaEnvelopeOpenText />,

        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Message 1",
                path: "/messages/message1",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Message 2",
                path: "/messages/message2",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },
    {
        title: "Support",
        path: "/support",
        icon: <IoIcons.IoMdHelpCircle />,
    },
    {
        title: "Calendar",
        path: "/calendar",
        icon: <AiFillCalendar/>,
    },

        ];