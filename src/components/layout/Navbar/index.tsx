import React from 'react';
import { 
    Header,
    Content,
    Nav,
} from './style';

import { FaPizzaSlice } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';

export default function Navbar() {
    return (
        <Header>
            <Content>
                <h3>Todo Icon</h3>
                <Nav>
                    <ul>
                        <li><span><AiOutlinePlus size={15} /></span></li>
                        <li><span><FaPizzaSlice size={15} /></span></li>
                    </ul>
                </Nav>
            </Content>
        </Header>
    );
}