import React from 'react'
import styled from 'styled-components'
import LowerFooterConatiner from './LowerFooterConatiner';
import UpperFooterContainer from './UpperFooterContainer';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

const Container = styled.div`
    width: 100%;
    background-color: #fff;
`;

const UpperFooter = styled.div`
    height: auto;
`;

const LowerFooter = styled.div`
    width: 100%;
    height: 40px;  
`;

const Divider = styled.div`
    background-color: lightgray;
    height: 0.5px;
    width: 100%;
`;

const SocialIcon = styled.div`
    display: flex;
    margin: 10px 45px;
`;

const Icon = styled.div`
    margin-right: 20px;
    cursor: pointer;
    color: #a5a5a5;
    &:hover {
        color: #1C6DD0;
    }
`;

const SocialText = styled.div`
    font-size: 18px;
    font-weight: 800;
    margin: 20px 45px;
`; 
function Footer() {
    return (
        <Container>
            <UpperFooter>
                <UpperFooterContainer/>
            </UpperFooter>  
            <SocialText>Connect</SocialText>
            <SocialIcon>
                <Icon><FacebookIcon/></Icon>
                <Icon><TwitterIcon/></Icon>
                <Icon><InstagramIcon/></Icon>
                <Icon><LinkedInIcon/></Icon>
                <Icon><YouTubeIcon/></Icon>
            </SocialIcon>
            <Divider></Divider>
            <LowerFooter>
                <LowerFooterConatiner/>
            </LowerFooter>
        </Container>
    )
}

export default Footer
