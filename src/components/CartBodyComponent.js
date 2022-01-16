import React from 'react'
import styled from 'styled-components';
import CartComponents from './CartComponents';

const BodyContainer = styled.div`
    margin-top: 25px;
    margin-bottom: 25px;
    padding: 0 15px;
`;

const Space60px = styled.div`
    height: 60px;
`;

function CartBodyComponent() {
    return (
        <BodyContainer>
            <Space60px/>
            <CartComponents/>
        </BodyContainer>
    )
}

export default CartBodyComponent
