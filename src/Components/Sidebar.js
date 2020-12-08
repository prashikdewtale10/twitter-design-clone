import React from 'react'
import '../App.css';
import {FaClipboardList, FaEnvelope, FaHashtag, FaHome, FaMehBlank, FaRegBell, FaRegBookmark, FaRegEnvelope, FaTwitter, FaUserAlt} from 'react-icons/fa'


export const sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><a href=""><FaTwitter className='icons logo main_logo' /></a></li>
            </ul>
            <ul>
                <li><a href=""><FaHome className='icons logo' />Home</a></li>
            </ul>
            <ul>
                <li><a href=""><FaHashtag className='icons' />Explore</a></li>
            </ul>
            <ul>
                <li><a href=""><FaRegBell className='icons' />Notification</a></li>
            </ul>
            <ul>
                <li><a href=""><FaRegEnvelope className='icons'/>Messages</a></li>
            </ul>
            <ul>
                <li><a href=""><FaRegBookmark className='icons' />Bookmarks</a></li>
            </ul>
            <ul>
                <li><a href=""><FaClipboardList className='icons'/>Lists</a></li>
            </ul>
            <ul>
                <li><a href=""><FaUserAlt className='icons' />Profile</a></li>
            </ul>
            <ul>
                <li><a href=""><FaMehBlank className='icons' />More</a></li>
            </ul>
            <div className="sidebar__Btn">
                <a href="">Tweet</a>
            </div>

        </div>
    )
}

export default sidebar;