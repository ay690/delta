import React from "react";
import { pricingData } from "../../data/PricingData";
import { IconContext } from "react-icons";
import { Button, TextWrapper, Heading } from "../../globalStyles";
import {
  PricingSection,
  PricingWrapper,
  PricingContainer,
  PricingCardInfo,
  PricingCardPlan,
  PricingCardCost,
  PricingCardFeatures,
  PricingCardText,
  PricingCardFeature,
  PricingCard,
} from "./PricingStyles";

const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: "1rem" }}>
      <PricingSection id="pricing">
        <PricingWrapper>
          <Heading>Pick your best Option</Heading>
          <TextWrapper
            mb="1.4rem"
            weight="600"
            size="1.1rem"
            color="white"
            align="center"
          >
            Create, maintain and store your data with Delta.
          </TextWrapper>
          <PricingContainer>
            {pricingData.map((card, idx) => (
              <PricingCard key={idx}>
                <PricingCardInfo>
                  <PricingCardPlan>{card.title}</PricingCardPlan>
                  <PricingCardCost>{card.price}</PricingCardCost>
                  <PricingCardText>{card.numAcc}</PricingCardText>
                  <PricingCardFeatures>
                    {card.features.map((feature, idx) => (
                        <PricingCardFeature key={idx} >
                            {feature}
                        </PricingCardFeature>
                    ))}
                  </PricingCardFeatures>
                  <Button>Get Started</Button>
                </PricingCardInfo>
              </PricingCard>
            ))}
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
};

export default Pricing;
