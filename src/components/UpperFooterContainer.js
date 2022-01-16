import React from 'react'
import styled from 'styled-components'
import SubscribeEmailPanel from './SubscribeEmailPanel';

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
`;

const FlexOne = styled.div`
    height: auto;
    width: 100%;
    flex: 1;
    padding-left: 50px;
    padding-top: 40px;
`;

const FlexTwo = styled.div`
    height: auto;
    width: 100%;
    flex: 1;
    padding: 40px 20px;
`;

const FlexThree = styled.div`
    height: auto;
    width: 100%;
    flex: 1;
    padding: 40px 20px;
`;

const FlexFour = styled.div`
    height: auto;
    width: 100%;
    flex: 1;
    padding: 40px 20px;
`;

const FlexFive = styled.div`
    height: auto;
    width: 100%;
    padding-right: 50px;
    padding-top: 40px;
    padding-left: 20px;
    flex: 2;
`;

const Heading = styled.div`
    font-size: 18px;
    font-weight: 800;
    margin-bottom: 20px;
`;

const Lists = styled.div`

`;

const Items = styled.div`
    font-size: 12px;
    margin: 10px 0;
    color: #a5a5a5;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        color: #121212;
    }
`;

const SubscribeEmail = styled.div`

`;

const SubscribeText = styled.div`
    font-size: 12px;
    margin: 20px 0;
    color: #777;
`;

function UpperFooterContainer() {
    return (
        <Container>
            <FlexOne>
                <Heading>
                    Policy Info
                </Heading>
                <Lists>
                    <Items>Privacy Policy</Items>
                    <Items>Terms of Sale</Items>
                    <Items>Terms of Use</Items>
                    <Items>FAQ</Items>
                </Lists>
            </FlexOne>
            <FlexTwo>
                <Heading>
                    Company
                </Heading>
                <Lists>
                    <Items>Career</Items>
                    <Items>Blog</Items>
                    <Items>Site Map</Items>
                    <Items>Contact Us</Items>
                </Lists>
            </FlexTwo>
            <FlexThree>
                <Heading>
                    Abronik Business
                </Heading>
                <Lists>
                    <Items>Shopping App</Items>
                    <Items>Sale on Abronik</Items>
                    <Items>Media Enquiries</Items>
                </Lists>
            </FlexThree>
            <FlexFour>
                <Heading>
                    Popular Links
                </Heading>
                <Lists>
                    <Items>Kids Clothing</Items>
                    <Items>Mens Clothing</Items>
                    <Items>Womens Clothing</Items>
                    <Items>Latest</Items>
                </Lists>
            </FlexFour>
            <FlexFive>
                <Heading>
                    Subscribe
                </Heading>
                <Lists>
                    <SubscribeEmail>
                        <SubscribeEmailPanel />
                    </SubscribeEmail>
                    <SubscribeText>
                        Register now to get updates on promotions and coupons.
                    </SubscribeText>
                </Lists>
            </FlexFive>
        </Container>
    )
}

export default UpperFooterContainer
