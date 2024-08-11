import React from 'react';
import Item from '../components/Item';
import styled from 'styled-components';

const Main = () => {
    return (
        <>
    <Container>
        
         <Item/>   
    </Container>
        </>
    );
};

const Container = styled.div`
    width:100dvw;
    height:100dvh;
    position:relative;
`

export default Main;