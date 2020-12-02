import React from 'react';
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import './LocationHeader.css'

function LocationHeader(props) {
    return (
        <div className='locationHeader'>
            <LocationOnOutlinedIcon className="locationHeader__locationIcon" />

            <div className="locationHeader__nav">
                <div className="locationHeader__option">
                    <span className="locationHeader__optionOne">Deliver to</span>
                    <span className="locationHeader__optionTwo">India</span>
                </div>

                <div className="locationHeader__option__one">
                    <span className="locationHeader__option__one__two">Today's Deals</span>
                    <span className="locationHeader__option__one__two">Customer Service</span>
                    <span className="locationHeader__option__one__two">Gift Cards</span>
                    <span className="locationHeader__option__one__two">Registry</span>
                    <span className="locationHeader__option__one__two">Sell</span>
                </div>
            </div>
        </div>
    );
}

export default LocationHeader;