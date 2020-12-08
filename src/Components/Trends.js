import React from 'react'
import {FaSeach} from 'react-icons/fa'
import Topics from './Topics'
const Trends = () => {
    return (
        <div className="trends">
            <div className="trends_search">
                <input type="text" className="src" placeholder='Search Twitter'  />
            </div>
            <Topics />

        </div>
    )
}

export default Trends
