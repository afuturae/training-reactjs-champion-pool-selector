import React, { useEffect, useState } from 'react';

import { ChampionType } from '../../interfaces/champions';

import { Header } from '../../components/Header';
import { ChampionSelected } from '../../components/ChampionSelectedCard';
import { Champion } from '../../components/Champion';

import {
    Container,
    SelectedChampions,
    Champions
} from './styles';

import loldata from '../../data/data.json';

const Home: React.FC = () => {

    const [champions, setChampions] = useState<ChampionType[]>([]);
    const [pool, setPool] = useState<ChampionType[]>([]);

    const handleSetChampion = (id: string) => {
        if(pool.length < 5) {
            const championIndex = champions.findIndex(c => c.id === id);
            setPool([...pool, champions[championIndex]]);
            let newChampions = champions;
            newChampions.splice(championIndex, 1);
            setChampions(newChampions);
        }
    }

    const handleRestore = (index: number) => {
        if(pool[index] !== undefined){
            const champion = pool[index];
            let newPool = pool;
            newPool.splice(index, 1);
            setPool([...newPool]);
        }

    };

    useEffect(() => {
        const championsData: ChampionType[] = [];

        const championsArray = loldata.data as any;
        const entries = Object.keys(championsArray);

        entries.forEach(entry => {
            const champion: ChampionType = {
                id: championsArray[entry].id,
                name: championsArray[entry].name,
                title: championsArray[entry].title,
                image: championsArray[entry].image.full,
            };
            championsData.push(champion);
        });

        setChampions(championsData);

    }, [])

    return (
        <Container>

            <Header />

            <SelectedChampions>
                <ChampionSelected
                    champion={pool[0]}
                    onClick={() => {handleRestore(0)}}
                />
                <ChampionSelected
                    champion={pool[1]}
                    onClick={() => {handleRestore(1)}}
                />
                <ChampionSelected
                    champion={pool[2]}
                    onClick={() => {handleRestore(2)}}
                />
                <ChampionSelected
                    champion={pool[3]}
                    onClick={() => {handleRestore(3)}}
                />
                <ChampionSelected
                    champion={pool[4]}
                    onClick={() => {handleRestore(4)}}
                />
            </SelectedChampions>

            <Champions>
                {
                    champions.map(c =>
                        <Champion
                            key={c.id}
                            name={c.name}
                            description={c.title}
                            image={c.image}
                            onClick={() => {handleSetChampion(c.id)}}
                        />
                    )
                }
            </Champions>

        </Container>
    );
}

export { Home };