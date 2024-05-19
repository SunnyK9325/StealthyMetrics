import React from "react";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ElectricRickshawRoundedIcon from '@mui/icons-material/ElectricRickshawRounded';
import DirectionsSubwayFilledOutlinedIcon from '@mui/icons-material/DirectionsSubwayFilledOutlined';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FilterNoneOutlinedIcon from '@mui/icons-material/FilterNoneOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';

import "./Navbar.scss";

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="container">
                    <div className="logoImage">
                        <img src="/images/logo.png" />
                    </div>
                    <div className="icons">
                        <DashboardOutlinedIcon className="icon" />
                    </div>
                    <div className="icons">
                        <AddToQueueIcon className="icon" />
                    </div>
                    <div className="icons">
                        <LabelImportantOutlinedIcon className="icon" />
                    </div>
                    <div className="icons">
                        <EventNoteOutlinedIcon className="icon" />
                    </div>
                    <div className="icons" style={{ position: "relative", width: "fit-content" }}>
                        <DirectionsSubwayFilledOutlinedIcon className="icon train" />
                        <div className="clock">
                            <WatchLaterIcon className="clockIcon" />
                        </div>
                    </div>
                    <div className="icons">
                        <LocalShippingOutlinedIcon className="icon" />
                    </div>
                    <div className="icons">
                        <ElectricRickshawRoundedIcon className="icon" />
                    </div>
                    <div className="icons">
                        <BusinessCenterOutlinedIcon className="icon" />
                    </div>
                    <div className="icons">
                        <AccountBalanceWalletOutlinedIcon className="icon" />
                    </div>
                    <div className="icons">
                        <FilterNoneOutlinedIcon className="icon" />
                    </div>
                    <div className="icons">
                        <SettingsOutlinedIcon className="icon" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;