import React from "react";
import "./DashboardPanel.scss";
import StatusCard from "../StatusCard/StatusCard";
import AlertCard from "../AlertCard/AlertCard";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import RvHookupOutlinedIcon from '@mui/icons-material/RvHookupOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const DashboardPanel = () => {
    return (
        <div className="dashboardPanel">
            <div className="container">
                {/* header component of the dashboard panel */}
                <div className="header">
                    <div className="title">
                        <span>Dashboard</span>
                    </div>
                    <div className="menu">
                        <SearchOutlinedIcon className="icon" />
                        <span>|</span>
                        <NotificationsNoneOutlinedIcon className="icon" />
                        <span>|</span>
                        <MoreVertOutlinedIcon className="icon" />
                    </div>
                </div>

                {/* status cards component of the dashboard panel */}
                <div className="statusCards">
                    {[1, 2, 3, 4].map(id => (
                        <StatusCard key={id} id={String(id)} />
                    ))}
                </div>

                {/* quick actions component of the dashboard panel */}
                <div className="quickActions">
                    <div className="heading"><span>Quick Actions</span></div>
                    <div className="actions">
                        <div className="item">
                            <div className="icon">
                                <LabelImportantOutlinedIcon />
                            </div>
                            <div className="title">
                                Create Indents
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <LocalShippingOutlinedIcon />
                            </div>
                            <div className="title">
                                Add vehicle
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <RvHookupOutlinedIcon />
                            </div>
                            <div className="title">
                                Add Trailer
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <PersonOutlinedIcon />
                            </div>
                            <div className="title">
                                Add Driver
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <LocalShippingOutlinedIcon />
                            </div>
                            <div className="title">
                                Add Indents
                            </div>
                        </div>
                    </div>
                </div>

                {/* alerts component of the dashboard panel */}
                <div className="alertSection">
                    <div className="heading">
                        <div className="title"><span>High Priority Alerts (14)</span></div>
                        <div className="option">
                            <span>View All</span>
                            <ChevronRightOutlinedIcon />
                        </div>
                    </div>
                    <div className="alerts">
                    {[1, 2].map(id => (
                        <AlertCard key={id} id={String(id)} />
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DashboardPanel;

