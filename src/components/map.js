/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/iframe-has-title */

import React, { useState, useEffect } from 'react';
import { media } from '@styles';
import styled from 'styled-components';






const Wrapper = styled.div`
  iframe{
    ${media.tablet`height:500px; `};
  }


`;

const MapRender = () => {
  const [isMounted, setIsMounted] = useState(false);

  
  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 2000);
    return () => clearTimeout(timeout);
  }, []);




  return (
    <Wrapper className="container rsvp-wrapper">
 
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11777.295950581796!2d-83.6512129!3d42.4421222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc0f9c1f10e62e688!2sCre8+Salon!5e0!3m2!1sen!2sus!4v1544914934960"
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      />
    </Wrapper>
  );
};
export default MapRender;
