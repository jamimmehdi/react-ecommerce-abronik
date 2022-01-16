import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
    background-color: #fff;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-text: center;
`;

const Left = styled.div`
    flex: 1;
`;

const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    align-text: center;
`;
const SearchContainer = styled.div`
    // border: 0.5px solid lightgray;
    align-items: center;
    height: 35px;
    display: flex;
    justify-content: center;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: rgba(244,244,244,0.6);
`;

const Input = styled.input`
    width: 350px;
    border: none;
    margin-right: 10px;
    background: transparent;
    &::-webkit-input-placeholder {
        opacity: 0.5;
   }
    &:focus{
        outline: none;
    }
`;

const MenuItems = styled.div`
    margin-right: 30px;
    font-weight: 600;
    cursor: pointer;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Logo = styled.span`
    font-weight: 900;
    font-size: 35px;
    color: #1C6DD0;
    cursor: pointer;
`;

const SearchInputArea = styled.div`
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`;

const SearchIconArea = styled.div`
    height: 100%;
    width: 100px;
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

`;

export default function NavigateBar() {
    let navigate = useNavigate();
    return (
        <div>
            <Container>
                <Wrapper>
                    <Left>
                        <Logo onClick={() => {
                            navigate("/");
                        }}>
                            Abronik
                        </Logo>
                    </Left>
                    <Center>
                        <SearchContainer>
                            <SearchInputArea>
                                <Input placeholder='Search Brand, Cloths and more...' />
                            </SearchInputArea>
                            <SearchIconArea>
                                <SearchText>
                                    Search
                                </SearchText>
                                <SearchIcon style={{ color: "#fff", fontSize: 20 }} />
                            </SearchIconArea>
                        </SearchContainer>
                    </Center>
                    <Right>
                        <MenuItems onClick={() => { navigate("/register"); }}>REGISTER</MenuItems>
                        <MenuItems onClick={() => { navigate("/login"); }}>LOGIN</MenuItems>
                        <MenuItems onClick={() => { navigate("/cart"); }}>
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </MenuItems>
                    </Right>
                </Wrapper>
            </Container>

        </div>
    )
}
