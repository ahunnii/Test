import { css } from 'styled-components';
import theme from './theme';
import media from './media';
const { colors, fontSizes, fonts } = theme;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  outline: css`
    outline: 1px solid red;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: ${colors.darkSlate};
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    color: ${colors.darkSlate};
    &:hover,
    &:focus,
    &:active {
      color: ${colors.backgroundGrey};
      outline: 0;
      &:after {
        width: 100%;
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: ${colors.backgroundGrey};
      transition: ${theme.transition};
      opacity: 0.5;
    }
  `,

  smallButton: css`
    color: ${colors.darkestGrey};
    background-color: transparent;
    border: 0px;
    border-radius: ${theme.borderRadius};
    margin: 5px 0px;
    padding:0px;
    font-size: ${fontSizes.xlarge};
    font-family: ${fonts.Montserrat};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
      color: ${colors.darkSlate};
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
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
  `,

  sidePadding: css`
  padding: 0 0px;
  ${media.desktop`padding: 0 0px;`};
  ${media.tablet`padding: 0 0px;`};
  ${media.phablet`padding: 0 0px;`};
  `,
};

export default mixins;
