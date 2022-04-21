import React from 'react';

import { Header } from '../../components/Header';
import { ChampionSelected } from '../../components/ChampionSelectedCard';
import { Champion } from '../../components/Champion';

import {
    Container,
    SelectedChampions,
    Champions
} from './styles';

const Home: React.FC = () => {
    return (
        <Container>

            <Header />

            <SelectedChampions>
                <ChampionSelected />
                <ChampionSelected />
                <ChampionSelected
                    name='Ahri'
                />
                <ChampionSelected />
                <ChampionSelected />
            </SelectedChampions>

            <Champions>
                <Champion
                    name='Aatrox'
                    description='A champion'
                />
            </Champions>

        </Container>
    );
}

export { Home };