import React from 'react'
import styled from 'styled-components'

const SubscribeContainer = styled.div`
    width: 100%;
    border: 0.5px solid lightgray;
    align-items: center;
    display: flex;
    justify-content: center;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: rgba(244,244,244,0.6);
`;

const EmailInputArea = styled.div`
    padding: 5px 10px;
    display: flex;
    flex: start;
    align-items: center;
    flex: 2;
`;

const InputEmail = styled.input`
        width: 100%;
        border: none;
        background: transparent;
        &::-webkit-input-placeholder {
            opacity: 0.5;
    }
        &:focus{
            outline: none;
        }
`;

const EmailTextArea = styled.div`
    flex: 1;
    height: 35px;
    margin: -0.5px 0;
    background-color: #1C6DD0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    cursor: pointer;
    &:hover {
        background-color: #1e78e6;
    }
`;

const SearchText = styled.div`
    font-size: 14px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    font-weight: 700;
`;

function SubscribeEmailPanel() {
    return (
        <SubscribeContainer>
            <EmailInputArea>
                <InputEmail placeholder='your email here...' />
            </EmailInputArea>
            <EmailTextArea>
                <SearchText>
                    SUBSCRIBE
                </SearchText>
            </EmailTextArea>
        </SubscribeContainer>
    )
}

export default SubscribeEmailPanel
