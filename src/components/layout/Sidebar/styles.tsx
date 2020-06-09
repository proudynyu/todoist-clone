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

export const Projects = styled.div`
    display: flex;
    margin-top: 10px;
    padding-left: 15px;
`;

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 28px;
    align-items: center;
    background-color: #ededed;
    border: none;
    border-bottom: 1px solid #0000000a;
    cursor: pointer;
    transition: 200ms;

    &:hover {
        background-color: #f7f7f7;
    }

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 0.3;

        &.plus-symbol {
            border: none;
            height: 28px;
            width: 20px;
            flex: 0.2;
            cursor: pointer;
            transition: 200ms;
            z-index: 3;
        };

        &.plus-symbol:hover {
            background-color: #00000015;
        }
    };

    p {
        flex: 2;
        text-align: left;
        font-weight: bold;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SubButton = styled.button``;