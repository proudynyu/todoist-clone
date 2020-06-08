import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsCalendar } from 'react-icons/bs'
import { FiInbox, FiAlertTriangle, FiChevronDown, FiChevronRight, FiPlus } from 'react-icons/fi'
import { 
    Container, 
    FixedList,
    UnorderedList,
    Button,
    SubButton,
    ButtonContainer } from './styles';

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
            <div className="projects">
                <div className="btn-container">
                    <Button>
                        <span><FiChevronRight size={15}/></span>
                        Projects
                    </Button>
                    <span><FiPlus size={15} /></span>
                </div>
                <ButtonContainer>
                    <SubButton>Work</SubButton>
                    <SubButton>Home</SubButton>
                    <SubButton>Vacation</SubButton>
                    <SubButton>Teste</SubButton>
                </ButtonContainer>
            </div>
        </Container>
    )
}