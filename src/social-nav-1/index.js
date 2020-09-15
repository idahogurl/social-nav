// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from "@emotion/styled";
import getStyle from "./style";
import siteSelector from "../site-selector";

// import {
//   Facebook,
//   Logo,
//   Twitter,
//   Pinterest,
//   Instagram,
//   YouTube,
//   Flipboard,
//   Mail,
//   OutboundLink,
//   Linkedin,
// } from './social-item';
/*
wrapperCss={{
  marginBottom: '30px',
  padding: 0,
  color: siteSelector('cyan', { gr8: 'pink', mnt: 'blue' }),
  '&:hover': {
    color: siteSelector(undefined, { gr8: 'pink-dark' }),
  },
}}
*/

const SocialNavWrapper = styled.div(({ wrapperCss }) => {
  return getStyle("hl", wrapperCss);
});

const SocialNavSubWrapper = styled.div(() => {
  return {
    display: "inline-flex",
    marginBottom: 0,
    padding: 0,
    alignItems: "center",
    justifyContent: siteSelector(["center", "center", "flex-start"], {
      hl: ["center", "flex-start"]
    }),
    flexWrap: ["wrap", "wrap", "nowrap"],
    width: ["100%", undefined]
  };
});

const SocialNav = ({ children, wrapperCss }) => {
  return (
    <SocialNavWrapper wrapperCss={wrapperCss}>
      <SocialNavSubWrapper>{children}</SocialNavSubWrapper>
    </SocialNavWrapper>
  );
};

export default SocialNav;

// convenience exports
// export {
//   Facebook,
//   Logo,
//   Twitter,
//   Pinterest,
//   Instagram,
//   YouTube,
//   Flipboard,
//   Mail,
//   OutboundLink,
//   Linkedin,
// };
