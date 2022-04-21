import React from 'react';
import logo from '../../assets/logo.png';

import {
    Container,
    Image
} from './styles';

const Header: React.FC = () => {
    return (
        <Container>
            <Image src={logo} alt="Logo Image"/>
        </Container>
    );
}

export { Header };