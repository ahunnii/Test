import styled from 'styled-components';
import theme from './theme';
const { colors, fontSizes, fonts } = theme;

const Button = styled.button`
  color: ${colors.darkSlate};
  background-color: white;
  border: 1px solid ${colors.darkSlate};
  border-radius: ${theme.borderRadius};
  font-size: ${fontSizes.medium};
  font-family: ${fonts.Montserrat};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transition};
  padding: 18px 23px;
  width:45%;
  height:100%;

  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.darkSlate};
    border-color:${colors.actualWhite};
    color:white;
    font-style:bold;
    outline: none;
  }
  &:after {
    display: none !important;
  }
`;

export default Button;
