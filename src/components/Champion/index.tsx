import { title } from 'process';
import React from 'react';

import {
    Container,
    Description,
    Title,
    InfoArea
} from './styles';

interface ChampionProps {
    name: string;
    description: string;
}

const Champion: React.FC<ChampionProps> = ({ name, description }) => {
    return(
        <Container name={name} >
            <InfoArea>
                <Title>{name}</Title>
                <Description>{description}</Description>
            </InfoArea>
        </Container>
    );
}

export { Champion };