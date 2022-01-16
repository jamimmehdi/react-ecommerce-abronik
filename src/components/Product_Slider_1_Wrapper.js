import styled from "styled-components";
import { productsList } from "../productdata";
import ProductSlider_1 from "./ProductSlider_1";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Container = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
`;

const ProductContainer = styled.div`
    margin-top: 25px;
`;

const CategoryName = styled.div`
font-size: 25px;
font-weight: 900;
`;

const SliderContainer = styled.div`
    width: 100%;
    position: relative;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    opacity: 0.5;
    z-index: 2;
    cursor: pointer;
`;

const Wrapper = styled.div`
    height: 100%;
    white-space: nowrap;
    overflow-x: scroll;
    scroll-behavior: smooth;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
        display: none;
    }
`;


function Product_Slider_1_Wrapper() {
    const sliderLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const sliderRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    return (
        <Container>
            <CategoryName>
                LATEST
            </CategoryName>
            <ProductContainer>
                <SliderContainer>
                    <Arrow direction="left" onClick={sliderLeft}>
                        <ArrowBackIosNewIcon />
                    </Arrow>
                    <Wrapper id="slider">
                        {productsList.map((slider_item) => (
                            <ProductSlider_1 slider_item={slider_item} key={slider_item.id} />
                        ))}
                    </Wrapper>
                    <Arrow direction="right" onClick={sliderRight}>
                        <ArrowForwardIosIcon />
                    </Arrow>
                </SliderContainer>
            </ProductContainer>

        </Container>
    )
}

export default Product_Slider_1_Wrapper
