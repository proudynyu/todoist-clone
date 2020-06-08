import React from 'react';
import { FiInbox } from 'react-icons/fi';
import { AiOutlineCalendar, AiOutlinePlus } from 'react-icons/ai';
import { BsCalendar } from 'react-icons/bs'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li><span><FiInbox size={15} /></span>Inbox</li>
                <li><span><AiOutlineCalendar size={15} /></span>Today</li>
                <li><span><BsCalendar size={15} /></span>Next 7 days</li>
            </ul>
            <div className="projects">
                <button className="dropdown">Projects</button>
                <a href="#">Project1</a>
                <a href="#">Project2</a>
                <a href="#">Project3</a>
            </div>
        </div>
    )
}