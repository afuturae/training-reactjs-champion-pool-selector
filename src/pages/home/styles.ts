import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(35, 35, 35, 0.75);
`;

export const SelectedChampions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
`;

export const Champions = styled.div`
    width: 100vw;
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 40px;
    margin-top: 30px;

    display: flex;
    flex-wrap: wrap;

    align-items: center;
    justify-content: center;
`;