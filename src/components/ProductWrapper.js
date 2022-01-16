import styled from "styled-components";
import { manyProductsList } from "../manyProductsList";
import Products from "./Products";


const Container = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
`;

const ProductContainer = styled.div`
    margin-top: 25px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
    @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (-webkit-min-device-pixel-ratio: 1) {
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 10px;
        grid-auto-rows: minmax(100px, auto);
    }
`;

const CategoryName = styled.div`
font-size: 25px;
font-weight: 900;
`;

function ProductWrapper() {
    return (
        <Container>
            <CategoryName>
                TRENDING
            </CategoryName>
            <ProductContainer>
                {manyProductsList.map((item) => (
                    <Products item={item} key={item.id} />
                ))}
            </ProductContainer>

        </Container>
    )
}

export default ProductWrapper