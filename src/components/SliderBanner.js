import styled from "styled-components"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { sliderItems } from '../bannerdata'
import { useState } from "react";

const Container = styled.div`
    width: 100%;
    height: 250px;
    background-color: gray;
    display: flex;
    position: relative;
    overflow: hidden;
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
    display: flex;
    transform: translateX(${props => props.slideIndex * - 100}vw);
    transition: ease-in 1.5s ease;
`;

const Slide = styled.div`
    width: 100vw;
    height: 100%
`;

const ImgContainer = styled.div`
    height: 100%;
`;

const Image = styled.img`
    height: 100%;
`;


export default function SliderBanner() {
    const [slideIndex, setSlideIndex] = useState(0);
    const length = sliderItems.length
    // console.log(length)
    console.log(slideIndex)
    const handleClick = (direction) => {
        if (direction === "right") {
            setSlideIndex(slideIndex === 0 ? length - 1 : slideIndex - 1);
            slideIndex++;
        } else if (direction === "left") {
            setSlideIndex(slideIndex < length - 1 ? slideIndex + 1 : 0);
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("right")}>
                <ArrowBackIosNewIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("left")}>
                <ArrowForwardIosIcon />
            </Arrow>
        </Container>
    )
}

