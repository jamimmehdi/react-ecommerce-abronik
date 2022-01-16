import React from 'react'
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { cartItems } from '../cartdata';

const Container = styled.div`
    display: flex;
    padding: 0 100px;
`;

const LeftContainer = styled.div`
    flex: 3;
    margin: 10px 10px;
    background: #fff;
`;

const RightContainer = styled.div`
    height: 100%;
    flex: 2;
    margin: 10px 10px;
    background: #fff;
`;

const CartItemCountContainer = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    border-bottom: 0.5px solid #d7d7d7;
`;
const CartTitle = styled.div`
    margin: 5px 20px;
    font-size: 20px;
    font-weight: 800;
`;

const ItemContainer = styled.div`
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
    border-bottom: 0.5px solid lightgray;
    height: 200px;
`;

const ImageContainer = styled.div`
    height: 150px;
    width: 100px;
    padding: 3px;
    margin: 5px 30px;
`;

const Img = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

const ItemDetailsContainer = styled.div`
    flex: 3;
`;

const ItemName = styled.div`
    margin: 5px;
    font-weight: 600;
`;

const ItemBrand = styled.div`
    margin: 5px;
    font-size: 14px;
    color: lightgray;
`;

const ItemSize = styled.div`
    margin: 5px;
    font-size: 14px;
    color: lightgray;
    display: flex;
`;
const SizeText = styled.div`
    font-size: 14px;
    color: lightgray;
    display: flex;
`;

const Size = styled.div`
    font-size: 14px;
    color: lightgray;
`;


const DeleteItem = styled.div`
    flex: 1;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 15px;
`;
const DeleteIconWrapper = styled.div`
    cursor: pointer;
    color: #a5a5a5;
    &:hover {
        color: red;
    }
`;
const ItemQuantityAction = styled.div`
    display: flex;
    padding: 3px;
`;

const IconPlus = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3px;
    height: 25px;
    width: 25px;
    border: 1px solid lightgray;
    border-radius: 50%;
    cursor: pointer;
`;

const IconMinus = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3px;
    height: 25px;
    width: 25px;
    border: 1px solid lightgray;
    border-radius: 50%;
    cursor: pointer;
`;

const Amount = styled.div`
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 25px;
    margin: 4px 10px 4px 10px;
    border: 0.5px solid lightgray;
`;

const ItemPriceWrapper = styled.div`
    margin: 40px 5px 10px 5px;
    display: flex;
`;
const ItemPrice = styled.div`
    font-weight: 800;
    font-size: 24px;
    margin-right: 20px;
    display: flex;
    align-items: flex-end;
`;
const OriginalPrice = styled.div`
    margin-right: 20px;
    display: flex;
    align-items: flex-end;
    font-size: 13px;
    color: lightgray;
    text-decoration: line-through;
`;

const OffPercent = styled.div`
    margin-right: 20px;
    display: flex;
    align-items: flex-end;
    font-size: 13px;
    color: #26a541;
`;
const PriceDetailsTextContainer = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    border-bottom: 0.5px solid #d7d7d7;
`;

const PriceDetailsTitle = styled.div`
    margin: 5px 20px;
    font-size: 20px;
    font-weight: 700;
    color: gray;
`;

const PriceDetailsContainer = styled.div`
    padding: 20px 20px;
`;
const PriceDetailsWrapper = styled.div`
    height: 100%;
    width: 100%;
    
`;

const TotalItemsAndPrice = styled.div`
    display: flex;
    margin: 0 10px;
    height: 60px;
    align-items: center;
`;

const PriceTextTotalItems = styled.div`
    flex: 2;
    font-size: 18px;
    font-weight: 600;
    color: darkgray;
`;

const PriceOfItems = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    font-weight: 600;
`;

const TotalAmountWrapper = styled.div`
    display: flex;
    margin: 0 10px;
    height: 60px;
    align-items: center;
    border-top: 0.5px solid lightgray;
    border-bottom: 0.5px solid lightgray;
    border-style: dashed none dashed none;
`;
const TotalAmountText = styled.div`
    flex: 2;
    font-size: 20px;
    font-weight: 900;
`;
const TotalAmount = styled.div`
    flex: 1;
    display: flex;
    font-size: 20px;
    justify-content: flex-end;
    font-weight: 900;
`;

const CheckoutButtonContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 20px 0;
`;

const Button = styled.button`
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
function CartComponents() {
    return (
        <Container>
            <LeftContainer>
                <CartItemCountContainer>
                    <CartTitle>My Cart</CartTitle>
                </CartItemCountContainer>
                {cartItems.map((cartItem) => (
                    <ItemContainer>
                        <ImageContainer><Img src={cartItem.img}></Img></ImageContainer>
                        <ItemDetailsContainer>
                            <ItemName>{cartItem.desc}</ItemName>
                            <ItemBrand>{cartItem.brand}</ItemBrand>
                            <ItemSize>
                                <SizeText>Size: </SizeText>
                                <Size> XL</Size>
                            </ItemSize>
                            <ItemPriceWrapper>
                                <ItemPrice id='offerPrice'>{cartItem.price}</ItemPrice>
                                <OriginalPrice id='originalPrice'>Rs. 1499</OriginalPrice>
                                <OffPercent id='percentOff'>50% Off</OffPercent>
                            </ItemPriceWrapper>
                            <ItemQuantityAction>
                                <IconMinus>
                                    <RemoveIcon style={{ fontSize: 14 }} />
                                </IconMinus>
                                <Amount>1</Amount>
                                <IconPlus>
                                    <AddIcon style={{ fontSize: 14 }} />
                                </IconPlus>
                            </ItemQuantityAction>
                        </ItemDetailsContainer>
                        <DeleteItem>
                            <DeleteIconWrapper><DeleteIcon /></DeleteIconWrapper>
                        </DeleteItem>
                    </ItemContainer>
                ))}
            </LeftContainer>
            <RightContainer>
                <PriceDetailsTextContainer>
                    <PriceDetailsTitle>PRICE DETAILS</PriceDetailsTitle>
                </PriceDetailsTextContainer>
                <PriceDetailsContainer>
                    <PriceDetailsWrapper>
                        <TotalItemsAndPrice>
                            <PriceTextTotalItems>Price (4 Items)</PriceTextTotalItems>
                            <PriceOfItems>Rs. 4560</PriceOfItems>
                        </TotalItemsAndPrice>
                        <TotalItemsAndPrice>
                            <PriceTextTotalItems>Discount</PriceTextTotalItems>
                            <PriceOfItems>- Rs. 1000</PriceOfItems>
                        </TotalItemsAndPrice>
                        <TotalItemsAndPrice>
                            <PriceTextTotalItems>Delivery Charges</PriceTextTotalItems>
                            <PriceOfItems>Rs. 100</PriceOfItems>
                        </TotalItemsAndPrice>
                    </PriceDetailsWrapper>
                    <TotalAmountWrapper>
                        <TotalAmountText>Total Amount</TotalAmountText>
                        <TotalAmount>Rs. 4000</TotalAmount>
                    </TotalAmountWrapper>
                    <CheckoutButtonContainer>
                        <Button>PLACE ORDER</Button>
                    </CheckoutButtonContainer>
                </PriceDetailsContainer>
            </RightContainer>
        </Container>
    )
}

export default CartComponents
