import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';

const Container = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    background-color: #fff;
    height: 400px;
    width: 400px;
    padding: 30px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 10px;
`;

const Cover = styled.div`
    
`;

const LoginTitle = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 10px 30px 10px;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 2px;
    color: #1e78e6;
`;

const EmailInputWrapper = styled.div`
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 25px;
`;

const EmailText = styled.div`
    margin-bottom: 6px;
    font-size: 12px;
    letter-spacing: 1px;
`;

const EmailInput = styled.div`
    padding: 5px 10px;
    width: 250px;
    // border: 0.5px solid lightgray;
    background-color: rgba(244,244,244,0.6);
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Input = styled.input.attrs({
    type: "text",
    placeholder: "Type your email here..."
})`
    font-size: 16px;
    width: 240px;
    border: none; 
    background: transparent;
        &::-webkit-input-placeholder {
            opacity: 0.5;
    }
        &:focus{
            outline: none;
        }
`;

const PasswordInputWrapper = styled.div`
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 30px;
`;

const PasswordText = styled.div`
    margin-bottom: 6px;
    font-size: 12px;
    letter-spacing: 1px;
`;

const PasswordInput = styled.div`
    padding: 5px 10px;
    width: 250px;
    // border: 0.5px solid lightgray;
    background-color: rgba(244,244,244,0.6);
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InputPassword = styled.input.attrs({
    type: "password",
    placeholder: "Type your password here..."
})`
    font-size: 16px;
    width: 240px;
    border: none;
    background: transparent;
    &::-webkit-input-placeholder {
        opacity: 0.5;
    }
    &:focus{
            outline: none;
        }
`;

const LoginButton = styled.button`
    font-weight: 900;
    border: none;
    color: #fff;
    height: 40px;
    width: 100%;
    padding: 10px 10px;
    background-color: #1C6DD0;
    cursor: pointer;
    font-size: 18px;
    letter-spacing: 2px;
    &:hover{
        background-color: #1e78e6;
    }
`;

const LoginButtonWrapper = styled.div`
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 30px;
`;

const ForgotPassword = styled.div`
    font-size: 12px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 5px;
    letter-spacing: 1px;
    cursor: pointer;
    color: #1e78e6;
`;

const SocailConnect = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SocialIconFacebook = styled.div`
    height: 40px;
    width: 40px;
    margin: 0 15px 20px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #1e78e6;
    cursor: pointer;
`;

const SocialIconGoogle = styled.div`
    height: 40px;
    width: 40px;
    margin: 0 15px 20px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #1e78e6;
    cursor: pointer;
`;

const SocialIconTwitter = styled.div`
    height: 40px;
    width: 40px;
    margin: 0 15px 20px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #1e78e6;
    cursor: pointer;
`;

const OrDividerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DividerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3px 5px;
`;

const Divider = styled.div`
    height: 1px;
    width: 50px;
    background-color: lightgray;
`;

const OrText = styled.div`
    letter-spacing: 1px;
    font-size: 12px;
    color: lightgray;
`;

function LoginForm() {
    return (
        <Container>
            <Wrapper>
                <Cover>
                    <LoginTitle>ACCOUNT LOGIN</LoginTitle>
                    <SocailConnect>
                        <SocialIconFacebook><FacebookIcon style={{ color: '#fff', fontSize: 22 }} /></SocialIconFacebook>
                        <SocialIconGoogle><GoogleIcon style={{ color: '#fff', fontSize: 22 }} /></SocialIconGoogle>
                        <SocialIconTwitter><TwitterIcon style={{ color: '#fff', fontSize: 22 }} /></SocialIconTwitter>
                    </SocailConnect>
                    <OrDividerContainer>
                        <DividerWrapper><Divider /></DividerWrapper>
                        <OrText>OR</OrText>
                        <DividerWrapper><Divider /></DividerWrapper>
                    </OrDividerContainer>
                    <EmailInputWrapper>
                        <EmailText>EMAIL</EmailText>
                        <EmailInput><Input placeholder='email' /></EmailInput>
                    </EmailInputWrapper>
                    <PasswordInputWrapper>
                        <PasswordText>PASSWORD</PasswordText>
                        <PasswordInput><InputPassword placeholder='password' /></PasswordInput>
                        <ForgotPassword>Forgot Password?</ForgotPassword>
                    </PasswordInputWrapper>
                    <LoginButtonWrapper>
                        <LoginButton>LOGIN</LoginButton>
                    </LoginButtonWrapper>
                </Cover>
            </Wrapper>
        </Container>
    )
}

export default LoginForm
