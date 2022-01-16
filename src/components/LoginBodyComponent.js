import React from 'react'
import styled from 'styled-components';
import LoginForm from './LoginForm';

const BodyContainer = styled.div`
    margin-top: 25px;
    margin-bottom: 25px;
    padding: 0 15px;
`;

const Space60px = styled.div`
    height: 60px;
`;

function LoginBodyComponent() {
    return (
        <BodyContainer>
            <Space60px/>
            <LoginForm/>
        </BodyContainer>
    )
}

export default LoginBodyComponent
