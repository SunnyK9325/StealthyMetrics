import React from "react";
import { useSelector } from 'react-redux'; // Importing useSelector hook from react-redux for accessing Redux store
import PropTypes from 'prop-types'; // Importing PropTypes for type checking
import "./StatusCard.scss";
import { PieChart } from 'react-minimal-pie-chart';

const StatusCard = ({ id }) => {
    const staticData = useSelector(state => state.staticData.statusCard);

    // Find the item in staticData array with matching ID
    const currentItem = staticData.find(item => item.id === id);

    // If item with matching ID is found, extract data; otherwise, use empty defaults
    const title = currentItem ? currentItem.title : '';
    const propertyOne = currentItem ? currentItem.propertyOne : '';
    const propertyTwo = currentItem ? currentItem.propertyTwo : '';
    const propertyThree = currentItem ? currentItem.propertyThree : '';
    const propOnevalue = currentItem ? currentItem.propOnevalue : '';
    const propTwovalue = currentItem ? currentItem.propTwovalue : '';
    const propThreevalue = currentItem ? currentItem.propThreevalue : '';

    return (
        <div className="statusCard">
            <div className="container">
                <div className="heading">
                    <span>{title}</span>
                </div>

                <div className="pieChart">
                    <PieChart
                        data={[
                            { title: 'propertyOne', value: parseInt(propOnevalue), color: '#FFCD4F' },
                            { title: 'propertyTwo', value: parseInt(propTwovalue), color: '#7869FF' },
                            { title: 'propertyThree', value: parseInt(propThreevalue), color: '#55D3B7' },
                        ]}
                        lineWidth={30}
                        radius={45}
                    >
                        <text
                            display={"flex"}
                            x="50%"
                            y="50%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            fontSize="9"
                            fill="#000000"
                        >
                            <tspan x="50%" dy="-0.2em" fill="#828080">Total</tspan>
                            <tspan x="50%" dy="1.2em" fontWeight="bold">{parseInt(propOnevalue) + parseInt(propTwovalue) + parseInt(propThreevalue)}</tspan>
                        </text>
                    </PieChart>
                </div>

                <div className="status one">
                    <span>{propertyOne}</span>
                    <span>{propOnevalue}</span>
                </div>
                <div className="status two">
                    <span>{propertyTwo}</span>
                    <span>{propTwovalue}</span>
                </div>
                <div className="status three">
                    <span>{propertyThree}</span>
                    <span>{propThreevalue}</span>
                </div>
            </div>
        </div>
    );
}

// Define prop types for better type checking
StatusCard.propTypes = {
    id: PropTypes.string.isRequired // ID prop is required and should be a string
};

export default StatusCard;
