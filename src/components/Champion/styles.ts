import styled from 'styled-components';

interface ContainerProps {
    name: string;
}

export const Container = styled.div<ContainerProps>`
    width: 120px;
    height: 120px;
    background-image: url(${ ({ name }) => `http://ddragon.leagueoflegends.com/cdn/12.7.1/img/champion/${name}.png`});
    margin: 5px;

    transition: 0.1s;

    &:hover {
        cursor: pointer;
        transform: scale(1.1, 1.1);
    }

`;

export const InfoArea = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    color: #fff;

    opacity: 0;
    transition: 0.1s;
    
    background-color: rgba(0, 0, 0, 0.5);
    
    &:hover {
        opacity: 1;
    }

`;

export const Title = styled.p`
    font-size: 1.2rem;
`;
export const Description = styled.p`
    font-size: 0.8rem;
`;
