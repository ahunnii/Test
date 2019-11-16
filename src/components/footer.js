/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { theme, mixins, media } from '@styles';
const { colors, fontSizes, fonts } = theme;

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.darkSlate};
  color: ${colors.tangerine};
  text-align: center;
  height: auto;
  min-height: 70px;
`;
const Copy = styled.p`
margin: 5px 0 3px;
`;
const GithubLink = styled.a`
color: ${colors.actualWhite};
font-family: ${fonts.Montserrat};
font-size: ${fontSizes.xsmall};
font-weight:400;
`;

const Footer = ({ githubInfo }) => (
  <FooterContainer>

    <Copy>
      <GithubLink
        href="https://www.andrewhunnii.com"
        target="_blank"
        rel="nofollow noopener noreferrer">
        Made with ❤️ by Andrew Hunn
      </GithubLink>
    </Copy>
  </FooterContainer>
);

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
