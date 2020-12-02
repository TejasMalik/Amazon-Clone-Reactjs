import React from 'react';
import './Top.css'

function Top(props) {
    return (
        <div className='top'>
            <a className="top__scroll" href="#app">
				<p>Back to Top</p>
			</a>
        </div>
    );
}

export default Top;