/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import anime from 'animejs';
// eslint-disable-next-line no-unused-vars
import { IconLoader } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins } from '@styles';
import Cre8 from '@images/logo.jpg';

const { colors } = theme;

const LoaderContainer = styled.div`
  ${mixins.flexCenter};
  background-color: ${colors.navcolor};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
`;
const LogoWrapper = styled.div`
  width: max-content;

  transition: ${theme.transition};
  opacity: ${props => (props.isMounted ? 1 : 0)};

  img, p, strong, hr, h1{
    width: 100vw;
    height: 100%;
    display: block;

    fill: none;
    user-select: none;

      opacity: 0;


  }
  p, strong{
    color:white;
    font-size:25px;
    text-align:center;

  }

  hr{
    border:none;
    height:3px;
    background:white;
    margin-top:0px;
    margin-bottom:5px;
  }
`;

const Loader = ({ finishLoading }) => {
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: '#logo, #test, #test1',
        duration: 1200,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo, #test1, #test',
        delay: 1200,
        duration: 800,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })


      .add({
        targets: '.loader',
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      });
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <LoaderContainer className="loader">
      <Helmet bodyAttributes={{ class: `hidden` }} />

      <LogoWrapper isMounted={isMounted}>
        <img id="logo" src={Cre8}/>
      </LogoWrapper>
    </LoaderContainer>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
