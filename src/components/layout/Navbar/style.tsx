import styled from 'styled-components';

export const Header = styled.header`
    height: 5vh;
    width: 100%;
    background-color: #ff3333;
    color: white;
`;

export const Content = styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Nav = styled.nav`
    ul {
        display: flex;
        flex-direction: row;
    }
    li {
        list-style: none;
        margin-left: 5px;
        cursor: pointer;
    }
`;
