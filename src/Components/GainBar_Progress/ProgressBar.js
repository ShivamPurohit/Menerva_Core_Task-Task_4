import React from 'react'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ReactStars from "react-rating-stars-component";

import "./ProgressBar.css"

const percentage = 90;

function ProgressBar() {

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <div className="progress__Bar">

            {/* Attendance-bar */}
            <div className="gain__attendance">
                <p className="gain__heading">Attendance</p>
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                />
                <p className="gain__info">Last absence <br />12th May, 12:00 PM</p>
            </div>

            <div className="gain__tests">
                <p className="gain__heading">Tests</p>
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                />
                <p className="gain__info">Last Test <br /> 100 %</p>
            </div>

            <div className="gain__rating">
                <p className="gain__heading">HW Rating</p>

                <div className="gain__stars">
                    <ReactStars
                        value={4.1}
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        isHalf={true}
                        activeColor="#EFD75B"
                    />
                    <p className="gain__rating">(4.1)</p>
                    <p className="gain__info">Last Homework <br />4.5</p>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar
