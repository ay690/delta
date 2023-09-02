import React from 'react';
import {
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	FooterLogo,
	SocialIcon,
	FooterRights,
	FooterSocialIcon,
	FooterWrapper,
	FooterAddress,
	FooterColumn,
	FooterGrid,
} from './FooterStyles';
import { footerData, footerSocialData } from '../../data/FooterData';
import { Row, Section } from '../../globalStyles';

const Footer = () => {
  return (
    <Section padding="4rem 0 2rem 0">
      <FooterWrapper>
        <FooterGrid justify="space-between">
          <FooterColumn id="footerLogo" >
             
           <FooterLogo to="/" >
            <SocialIcon src="./assets/logo.png" />
            Delta
           </FooterLogo>
           <FooterAddress>
							69 Street, Delta Building, XYZ Road, Los Angeles 1983
						</FooterAddress>

            <Row align="center" margin="auto 0 0 0" gap="1rem">
              {footerSocialData.map((social, idx) =>(
                <FooterSocialIcon 
                key = {idx}
                href='/'
                target="_blank"
                aria-label={social.name}
                >
                  {social.icon}
                </FooterSocialIcon>
              ))}
            </Row>
          </FooterColumn>
          {footerData.map((footerItem, idx) => (
            <FooterLinkItems key={idx}>
              <FooterLinkTitle>
                {footerItem.title}
              </FooterLinkTitle>
              {footerItem.links.map((link, linkIdx) => (
                <FooterLink key={linkIdx} to='/' >
                  {link}
                </FooterLink>
              ))}
            </FooterLinkItems>
          ))}
        </FooterGrid>
        <FooterRights>Delta &copy; 2021 &#8482;</FooterRights>
      </FooterWrapper>

    </Section>
  )
}

export default Footer;
