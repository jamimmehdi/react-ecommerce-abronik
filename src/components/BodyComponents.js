import styled from "styled-components"
import ProductWrapper from "./ProductWrapper";
import Product_Slider_1_Wrapper from "./Product_Slider_1_Wrapper";
import SliderBanner from "./SliderBanner";


const BodyContainer = styled.div`
    margin-top: 25px;
    padding: 0 15px;
`;

const BodyComponents = () => {
    return (
        <BodyContainer>
            <SliderBanner/>
            <Product_Slider_1_Wrapper/>
            <ProductWrapper/>
        </BodyContainer>
    )
}

export default BodyComponents
