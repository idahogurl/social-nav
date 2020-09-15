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

const SocialNav = ({
  children,
  wrapperCss = {
    paddingBottom: 0,
    paddingTop: siteSelector([30, 40], {
      gr8: [30],
    }),
    justifyContent: siteSelector(['center', undefined, 'flex-start'], {
      hl: ['center', 'flex-start'],
    }),
  },
  subwrapperCss,
}) => (
  <div
    css={[
      {
        display: 'flex',
        alignItems: 'center',
        paddingBottom: 0,
        marginBottom: siteSelector([30, 40], {
          gr8: 32,
        }),
        textAlign: ['center', undefined],
        '& a': {
          color: wrapperCss.color ? wrapperCss.color : undefined,
        },
        '& a:hover': {
          color: wrapperCss['&:hover']
            ? wrapperCss['&:hover'].color
            : undefined,
        },
        ...wrapperCss,
      },
      siteSelector(
        {
          flexWrap: ['wrap', 'nowrap'],
          justifyContent: ['center', 'left'],
        },
        {
          gr8: {
            flexWrap: ['wrap', undefined, 'nowrap'],
            justifyContent: ['center', undefined, 'left'],
          },
          mnt: {
            flexWrap: ['wrap', undefined, 'nowrap'],
            justifyContent: ['center', undefined, 'left'],
          },
        }
      ),
    ]}
  >
    <div
      css={[
        {
          display: 'inline-flex',
          marginBottom: 0,
          padding: 0,
          alignItems: 'center',
          justifyContent: siteSelector(['center', 'center', 'flex-start'], {
            hl: ['center', 'flex-start'],
          }),
          flexWrap: ['wrap', 'wrap', 'nowrap'],
          width: ['100%', undefined],
        },
        subwrapperCss,
      ]}
    >
      {children}
    </div>
  </div>
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
