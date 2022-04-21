import React from 'react';

import { Header } from '../../components/Header';
import { ChampionSelected } from '../../components/ChampionSelectedCard';

import {
    Container,
    SelectedChampions
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
        </Container>
    );
}

export { Home };