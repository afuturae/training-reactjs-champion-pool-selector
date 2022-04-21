import React from 'react';

import {
    ContainerNoChampion,
    ContainerWithChampion,
    NoChampion,
    ChampionArea,
    ChampionTitle,
    ChampionImage
} from './styles';

interface ChampionSelectedProps {
    name?: string;
}

const ChampionSelected: React.FC<ChampionSelectedProps> = ({ name }) => {
    return(
        name === undefined ?
        <ContainerNoChampion>
            <NoChampion>NO CHAMPION</NoChampion>
        </ContainerNoChampion>
        :
        <ContainerWithChampion>
            <ChampionArea>
                <ChampionImage src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`} alt="asdasd" />
                <ChampionTitle>{name}</ChampionTitle>
            </ChampionArea>
        </ContainerWithChampion>
    );
}

export { ChampionSelected };