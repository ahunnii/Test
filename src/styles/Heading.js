import styled from 'styled-components';
import theme from './theme';
import media from './media';
const { colors, fonts } = theme;

const Heading = styled.h1`
  position: relative;
  display: block;
  margin: 0px auto;
  padding:0px auto;
  align-items: center;
  width: 100%;

  font-family: ${fonts.Raleway};
  color: ${colors.darkSlate};
  letter-spacing: .1em;
  text-shadow:-1px -1px 1px #111,2px 2px 1px ${colors.backgroundGrey};
  font-weight:500;
  font-size:50px;
  text-transform: uppercase;

  ${media.tablet`font-size: 45px;`};
  ${media.phone`font-size: 40px;`};
`;

export default Heading;
