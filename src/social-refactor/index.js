import styled from '@emotion/styled';
import {
  Facebook,
  Logo,
  Twitter,
  Pinterest,
  Instagram,
  YouTube,
  Flipboard,
  Mail,
  OutboundLink,
  Linkedin,
} from './social-item';

import getStyle from './style';

const SocialNavWrapper = styled.div(({ wrapperCss }) => {
  return getStyle(wrapperCss);
});

const SocialNavSubWrapper = styled.div({
  display: 'inline-flex',
  marginBottom: 0,
  padding: 0,
  alignItems: 'center',
  justifyContent: siteSelector(['center', 'center', 'flex-start'], {
    hl: ['center', 'flex-start'],
  }),
  flexWrap: ['wrap', 'wrap', 'nowrap'],
  width: ['100%', undefined],
});

const SocialNav = ({
  children,
  wrapperCss,
}) => (
  <SocialNavWrapper wrapperCss={wrapperCss}>
     <SocialNavSubWrapper>
      {children}
    </SocialNavSubWrapper>
    </SocialNavWrapper>
);

export default SocialNav;

// convenience exports
export {
  Facebook,
  Logo,
  Twitter,
  Pinterest,
  Instagram,
  YouTube,
  Flipboard,
  Mail,
  OutboundLink,
  Linkedin,
};
