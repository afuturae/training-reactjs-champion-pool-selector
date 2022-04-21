import React from 'react';
import { ChampionType } from '../../interfaces/champions';

import {
    ContainerNoChampion,
    ContainerWithChampion,
    NoChampion,
    ChampionArea,
    ChampionTitle,
    ChampionImage
} from './styles';

interface ChampionSelectedProps {
    champion?: ChampionType;
    onClick(): void;
}

const ChampionSelected: React.FC<ChampionSelectedProps> = ({ champion, onClick }) => {
    return(
        champion === undefined ?
        <ContainerNoChampion>
            <NoChampion>NO CHAMPION</NoChampion>
        </ContainerNoChampion>
        :
        <ContainerWithChampion onClick={onClick} >
            <ChampionArea>
                <ChampionImage
                    src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.image.replace('.png', '')}_0.jpg`}
                    alt={champion.image} />
                <ChampionTitle>{champion.name}</ChampionTitle>
            </ChampionArea>
        </ContainerWithChampion>
    );
}

export { ChampionSelected };