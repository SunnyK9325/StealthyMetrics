import React from "react";
import "./ActivityPanel.scss";
import ActivityListCard from "../ActivityListCard/ActivityListCard";

// Functional component for displaying the activity panel
const ActivityPanel = () => {
    return (
        <div className="activityPanel">
            <div className="container">
                <div className="highlights">
                    <div className="heading">
                        {/*today's highlights */}
                        <span>Todays highlights (14)</span>
                    </div>
                    <div className="date">
                        {/*current date */}
                        <span>19 March 2024</span>
                    </div>
                    <div className="financeSummary">
                        {/* summary of today's financial transactions */}
                        <div className="item">
                            <div className="type"><span>Income</span></div>
                            <div className="amount" style={{ color: "#0A820A" }}><span>100000 CAD</span></div>
                            <div className="status"><span>2 payments received</span></div>
                        </div>
                        <div className="item">
                            <div className="type"><span>Expenses</span></div>
                            <div className="amount" style={{ color: "#D24949" }}><span>50000 CAD</span></div>
                            <div className="status"><span>5 payments paid</span></div>
                        </div>
                    </div>
                </div>

                <div className="activities">
                    {/* Render a card for completed activities */}
                    <ActivityListCard id="completed" activity="Completed Activities (14)" />
                    {/* Render a card for scheduled activities */}
                    <ActivityListCard id="scheduled" activity="Scheduled Activities (14)" />
                </div>
                <div className="author">
                <span>made by sunnykumar9325@gmail.com</span>
                </div>
            </div>
        </div>
    );
}
export default ActivityPanel;
