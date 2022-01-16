import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:  center;
    align-text: center;
    height: 100%;
    font-size: 12px;
    color: lightgray;
`;

const LeftContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items:  center;
    padding: 0 10px;
`;

const RightContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items:  center;
    padding: 0 30px;
`;

function LowerFooterConatiner() {
    return (
        <Container>
            <LeftContainer>
                Copyright © 2022, Abronik. All Rights Reserved
            </LeftContainer>
            <RightContainer>
                Designed and Developed by Jamim Mehdi
            </RightContainer>
        </Container>
    )
}

export default LowerFooterConatiner
