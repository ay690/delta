import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
  {
    name: "Facebook",
    icon: iconStyle(FaFacebook),
  },
  {
    name: "Instagram",
    icon: iconStyle(FaInstagram),
  },
  {
    name: "LinkedIn",
    icon: iconStyle(FaLinkedin),
  },
  {
    name: "Youtube",
    icon: iconStyle(FaYoutube),
  },
  {
    name: "Twitter",
    icon: iconStyle(FaTwitter),
  },
];

export const footerData = [
  {
    title: "Main",
    links: ["Blog", "FAQs", "Support", "About us"],
  },
  {
    title: "Product",
    links: ["Login", "Personal", "Business", "Team"],
  },
  {
    title: "Press",
    links: ["Login", "Personal", "Business", "Office"],
  },
  {
    title: "Legal",
    links: ["GDPR", "Privacy Policy", "Terms of Sevice", "Disclaimer"],
  },
];
