import styled from "styled-components"
import "../App.css"

const Container = styled.div`
    margin-top: 60px;
    position: realative;
    height: 40px;
    background-color: #fff;
    border-top: 0.5px solid lightgray;
    align-items: center;
    align-text: center;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Wrapper = styled.div`
    padding: 0 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-text: center;
`;

const CategoryItems = styled.div`
    align-items: center;
    align-text: center;
    font-weight: 700;
    height: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 0 16px;
    &:hover {
        color: #1C6DD0;
     }
`;

export const Category = () => {
    return (
        <Container>
            <Wrapper>
            <CategoryItems >Best Seller</CategoryItems>
            <CategoryItems >New Release</CategoryItems>
            <CategoryItems >Top Offer</CategoryItems>
            <CategoryItems >Men</CategoryItems>
            <CategoryItems >Women</CategoryItems>
            <CategoryItems >Kids</CategoryItems>
            </Wrapper>
        </Container>
    )
}
