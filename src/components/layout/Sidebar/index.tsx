import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsCalendar } from 'react-icons/bs'
import { 
    FiInbox, 
    FiAlertTriangle, 
    FiChevronDown, 
    FiChevronRight, 
    FiPlus,
    FiTrash2 } from 'react-icons/fi'
import { 
    Container, 
    FixedList,
    UnorderedList,
    Button,
    SubButton,
    ButtonContainer,
    Projects } from './styles';

export default function Sidebar() {
    return (
        <Container>
            <UnorderedList>
                <FixedList>
                    <span><FiInbox size={15} color='#47b6ff'/></span>
                    Inbox
                </FixedList>
                <FixedList>
                    <span><AiOutlineCalendar size={15} color='#076e00' /></span>
                    Today
                </FixedList>
                <FixedList>
                    <span><BsCalendar size={15} color='#46006e' /></span>
                    Next 7 days
                </FixedList>
                <FixedList>
                    <span><FiAlertTriangle size={15} color='#a80000' /></span>
                    Important
                </FixedList>
            </UnorderedList>

            <Projects>
                <Button>
                    <span>
                        <FiChevronRight size={15}/>
                    </span>
                    <p>Projects</p>
                    <span className="plus-symbol">
                        <FiTrash2 size={15} color="#000" />
                    </span>
                    <span className="plus-symbol">
                        <FiPlus size={15} color="#d92b00" />
                    </span>
                </Button>
            </Projects>
            <Projects>
                <Button>
                    <span>
                        <FiChevronRight size={15}/>
                    </span>
                    <p>Labels</p>
                    <span className="plus-symbol">
                        <FiTrash2 size={15} color="#000" />
                    </span>
                    <span className="plus-symbol">
                        <FiPlus size={15} color="#d92b00" />
                    </span>
                </Button>
            </Projects>
            <Projects>
                <Button>
                    <span>
                        <FiChevronRight size={15}/>
                    </span>
                    <p>Filter</p>
                    <span className="plus-symbol">
                        <FiTrash2 size={15} color="#000" />
                    </span>
                    <span className="plus-symbol">
                        <FiPlus size={15} color="#d92b00" />
                    </span>
                </Button>
            </Projects>

        </Container>
    )
}