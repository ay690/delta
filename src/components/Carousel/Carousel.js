import React, { useState, useEffect } from "react";
import Slider from "react-slick"; // Import the Slider component from react-slick
import "slick-carousel/slick/slick.css"; // Import the slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import the slick carousel theme styles
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import { data, SliderSettings } from "../../data/CarouselData";
import { Row, Heading, TextWrapper, Section } from "../../globalStyles";
import {
  ButtonContainer,
  ImageWrapper,
  CarouselImage,
  CardButton,
} from "./CarouselStyles";

const Carousel = () => {
  const [sliderRef, setSliderRef] = useState(null);

  // Function to go to the next slide automatically
  const goToNextSlide = () => {
    sliderRef.slickNext();
  };

  useEffect(() => {
    // Automatically go to the next slide every 3 seconds
    const interval = setInterval(goToNextSlide, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [sliderRef]);

  return (
    <Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
      <Row justify="space-between" margin="1rem" wrap="wrap">
        <Heading width="auto" inverse>Find more about us</Heading>
        <ButtonContainer>
          <IconContext.Provider value={{ size: "3rem", color: "#1d609c" }}>
            <FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
            <FaArrowCircleRight onClick={sliderRef?.slickNext} />
          </IconContext.Provider>
        </ButtonContainer>
      </Row>

      <Slider {...SliderSettings} ref={(slider) => setSliderRef(slider)}>
        {data.map((el, idx) => (
          <ImageWrapper key={idx}>
            <CarouselImage src={el.image} />
            <TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
              {el.title}
            </TextWrapper>
            <TextWrapper size="0.9rem" margin="0.7rem" color="#4f4f4f">
              {el.description}
            </TextWrapper>
            <CardButton>Learn More</CardButton>
          </ImageWrapper>
        ))}
      </Slider>
    </Section>
  );
};

export default Carousel;
