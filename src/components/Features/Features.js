import React from 'react'
import { Container, Section }  from "../../globalStyles";
import {
	FeatureText,
	FeatureTitle,
	FeatureWrapper,
	FeatureColumn,
	FeatureImageWrapper,
	FeatureName,
	FeatureTextWrapper,
} from './FeaturesStyles';
import { featuresData } from '../../data/FeaturesData';

const Features = () => {
  const initial = {
    y: 40,
    opacity: 0,
  };

  const animate = {
    y: 0,
    opacity: 1,
  }

  return (
    <Section smPadding = "50px 10px" position = "relative" inverse  id = "about" >
        <Container>
            <FeatureTextWrapper>
                <FeatureTitle>What We Offer</FeatureTitle>
            </FeatureTextWrapper>
            <FeatureWrapper>
                {featuresData.map((el, idx) => (
                    <FeatureColumn 
                     initial = {initial}
                     animate = {animate}
                     transition={{duration: 0.5 + idx * 0.1}}
                     key={idx}
                    >
                        <FeatureImageWrapper className={el.imgClass}  >
                            {el.icon}
                        </FeatureImageWrapper>
                        <FeatureName>{el.name}</FeatureName>
                        <FeatureText>{el.description}</FeatureText>
                    </FeatureColumn>
                ))}
            </FeatureWrapper>
        </Container>
    </Section>
  )
}

export default Features
