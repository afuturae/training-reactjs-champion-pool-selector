import styled from "styled-components";

export const ContainerNoChampion = styled.div`
    width: 160px;
    height: 320px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #424242;

    margin: 0 6px;

    transition: 0.2s;

    &:hover {
        cursor: pointer;
        transform: scale(1.05, 1.05);
    }
`;

export const ContainerWithChampion = styled.div`
    width: 160px;
    height: 320px;
    
    display: flex;

    background-color: #D13639;

    margin: 0 6px;

    transition: 0.2s;

    &:hover {
        cursor: pointer;
        transform: scale(1.05, 1.05);
    }
`;

export const NoChampion = styled.p`
    font-style: italic;
    color: #ACACAC;
`;

export const ChampionTitle = styled.div`
    color: #fff;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ChampionArea = styled.div`
`;

export const ChampionImage = styled.img`
    max-width: 100%;
`;
