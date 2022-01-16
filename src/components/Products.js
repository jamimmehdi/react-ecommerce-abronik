import styled from "styled-components";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Container = styled.div`
    min-width: 220px;
    height: 375px;
    margin: 8px;
    flex: 1;
    padding: 7px;
    background-color: #fff;
    border-radius: 4px;
    &:hover {
        transform: scale(1.04);
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        transition: all 0.2s ease;
      }
`;
const ImgContainer = styled.div`
    height: 280px;
    width: 100%
    background-color: gray;
    position: relative;
`;

const ProductInfo = styled.div`
    margin-top: 7px;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

const ProductTitle = styled.div`
    padding: 3px;
    font-size: 18px;
    font-weight: 700;
`;

const ProductDesc = styled.div`
    padding: 0 3px 0 3px;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const Price = styled.div`
    padding: 5px 3px 0 3px;
    font-size: 14px;
    font-weight: bold;
    color: #1C6DD0;
`;

const ShoppingIcons = styled.div`
      height: 100%;
      width: 100%;
      position: absolute;
      display: flex;
`;

const Wishlist = styled.div`
    position: absolute;
    height: 40px;
    width: 40px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    align-text: center;
    border-radius: 50%;
    left: 5px;
    bottom: 5px;
    transition: all 0.3s ease;
    &:hover {
        transform: scale(1.1);
    }
`;

const PriceAndCart = styled.div`
    display: flex;
`;

const AddToCartWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;

const AddToCart = styled.div`
    background-color: #121212;
    font-size: 12px;
    color: #fff;
    margin: 5px 3px;
    padding: 5px;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
        background-color: #30475E;
    }
`;

function Products({ item }) {
    return (
        <Container>
            <ImgContainer>
                <ShoppingIcons>
                    <Wishlist><FavoriteBorderIcon /></Wishlist>
                </ShoppingIcons>
                <Image src={item.img} />
            </ImgContainer>
            <ProductInfo>
                <ProductTitle>{item.title}</ProductTitle>
                <ProductDesc>{item.desc}</ProductDesc>
                <PriceAndCart>
                    <Price>{item.price}</Price>
                    <AddToCartWrapper><AddToCart>Add to Cart</AddToCart></AddToCartWrapper>
                </PriceAndCart>

            </ProductInfo>
        </Container>
    )
}

export default Products
