import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ededed;
    flex: 0.5;
    border-right: 1px solid #0000000a;
`;

export const UnorderedList = styled.ul`
    border-bottom: 1px solid #0000000a;
    margin-top: 20px;
    margin-bottom: 10px;
    padding-left: 15px;
    width: 100%;
`

export const FixedList = styled.li`
    list-style: none;
    width: 100%;
    height: 28px;
    margin-bottom: 5px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: 300ms;
    padding-left: 5px;

    span {
        margin-right: 10px;
    };

    &:hover {
        background-color: #f7f7f7;
    }
`;

export const Button = styled.button``;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SubButton = styled.button``;