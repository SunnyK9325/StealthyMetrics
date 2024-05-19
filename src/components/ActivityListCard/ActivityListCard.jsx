import React from "react";
import "./ActivityListCard.scss";

// Functional component for rendering a card displaying a list of activities
const ActivityListCard = ({ id, activity }) => {
    return (
        <div className="activityListCard">
            <div className="header">
                <div className="heading">
                    {/* Display the activity title */}
                    <span>{activity}</span>
                </div>
                <div className="option">
                    {/* Placeholder for future functionality, e.g., linking to a detailed view */}
                    <span>View All</span>
                </div>
            </div>

            {/* Check if the 'id' prop is 'completed' to conditionally render completed activities */}
            {id == "completed" ?
                <div className="activityList">
                    <div className="row">
                        <span>
                            <span className="name">Gurpreet Singh </span><span className="action">(Dispatch team) has created</span> Load No. I-I-AAA-1325
                        </span>
                    </div>
                    <div className="row">
                        <span>
                            <span className="name">Aman</span> <span className="action">(Driver)</span> Picked Up <span className="action">goods at</span> Location_Name <span className="action">for</span> Load No. I-I-AAA-1325
                        </span>
                    </div>
                    <div className="row">
                        <span>
                            <span className="name">Gurpreet Singh</span> <span className="action">(Dispatch team) has created</span> Load No. I-I-AAA-1325
                        </span>
                    </div>
                    <div className="row">
                        <span>
                            Load No. I-I-AAA-1325 <span className="action">will start added</span> by <span className="name">Gurpreet Singh</span>
                        </span>
                    </div>
                </div>
                :
                <div className="activityList">
                    <div className="row">
                        <span>
                            Load No. I-I-AAA-1325 <span className="action">will be</span> delivered by <span className="name">Aman (Driver)</span>
                        </span>
                    </div>
                    <div className="row">
                        <span>
                            <span className="name">Aman </span> <span className="action">(Driver) will</span> Picked Up <span className="action">goods at</span> Location_Name for Load No. I-I-AAA-1325
                        </span>
                    </div>
                    <div className="row">
                        <span>
                            Load No. I-I-AAA-1325 <span className="action">will start added</span> by <span className="name">Gurpreet Singh</span>
                        </span>
                    </div>
                    <div className="row">
                        <span>
                            Load No. I-I-AAA-1325 will <span className="action">will start added</span> <span className="name">Gurpreet Singh</span>
                        </span>
                    </div>
                </div>
            }
        </div>
    );
}
export default ActivityListCard;

//
