import React from 'react'
import styled from 'styled-components';
import RegisterForm from './RegisterForm';

const BodyContainer = styled.div`
    margin-top: 25px;
    margin-bottom: 25px;
    padding: 0 15px;
`;

const Space60px = styled.div`
    height: 60px;
`;

function RegisterBodyComponent() {
    return (
        <BodyContainer>
            <Space60px />
            <RegisterForm />
        </BodyContainer>
    )
}

export default RegisterBodyComponent
