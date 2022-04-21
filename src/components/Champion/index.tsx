import React from 'react';

import {
    Container,
    Description,
    Title,
    InfoArea
} from './styles';

interface ChampionProps {
    name: string;
    image: string;
    description: string;
    onClick(): void;
}

const Champion: React.FC<ChampionProps> = ({
    name,
    description,
    image,
    onClick
}) => {
    return(
        <Container name={image} onClick={onClick} >
            <InfoArea>
                <Title>{name}</Title>
                <Description>{description}</Description>
            </InfoArea>
        </Container>
    );
}

export { Champion };