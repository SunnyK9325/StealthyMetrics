import React from "react";
import "./AlertCard.scss";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import { useSelector } from 'react-redux'; // Importing useSelector hook from react-redux for accessing Redux store
import PropTypes from 'prop-types'; // Importing PropTypes for type checking


// Functional component for displaying an alert card
const AlertCard = ({ id }) => {
    const staticData = useSelector(state => state.staticData.alertCard);
    console.log(staticData);

    const currentItem = staticData.find(item => item.id === id);

    // If item with matching ID is found, extract data; otherwise, use empty defaults
    const title = currentItem ? currentItem.title : '';
    const load = currentItem ? currentItem.load : '';
    const billto = currentItem ? currentItem.billto : '';
    const date = currentItem ? currentItem.date : '';
    const desc = currentItem ? currentItem.desc : '';

    return (
        <div className="alert">
            <div className="container">
                <div className="info">
                    <div className="alertDetails">
                        <div className="alertIcon">
                            {/* Icon representing the alert type */}
                            {id == "1" ? <PersonOutlinedIcon /> : <DeviceThermostatIcon />}
                        </div>
                        <div className="details">
                            <div className="title">
                                {/* Title of the alert */}
                                <span>{title}</span>
                            </div>
                            <div className="detail">
                                <div>
                                    {/* Load number related to the alert */}
                                    <span>Load No: {load},</span>
                                </div>
                                <div>
                                    {/* Billing information related to the alert */}
                                    <span>Bill To : {billto}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="alertDate">
                        {/* Date when the alert was raised */}
                        <span>{date}</span>
                    </div>
                </div>
                <div className="description">
                    {/* Description of the alert */}
                    <span>{desc}</span>
                </div>
                <div className="buttons">
                    <div className="btn">
                        {/* Buttons for ignoring or resolving the alert */}
                        <button className="btn1">Ignore</button>
                        <button className="btn2">Resolve</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Define prop types for better type checking
AlertCard.propTypes = {
    id: PropTypes.string.isRequired // ID prop is required and should be a string
};
// Export the component for use in other parts of the application
export default AlertCard;
