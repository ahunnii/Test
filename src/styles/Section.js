import styled from 'styled-components';
import media from './media';

const Section = styled.section`
  margin: 0 auto;
  padding: 50px 0 100px;
  text-align:left;
  width:85vw;
  ${media.tablet`padding: 25px 0 50px;`};
`;

export default Section;
