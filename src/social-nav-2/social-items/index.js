import { css } from 'emotion';
import Link from '../../../shared/components/link';

const SocialItem = ({
  iconId, itemCss, isLogo, href, label,
}) => (
  <Link
    className={iconId}
    css={[
      {
        display: 'inline-flex',
        '&::before': {
          fontSize: 20,
        },
        textDecoration: 'none',
        width: 20,
        height: 20,
        color: siteSelector('text-black', { gr8: 'white' }),
        '&:last-child': { marginRight: 0 },
        ...siteSelector(
          { marginRight: [25, 20] },
          {
            hl: {
              marginRight: [15, 20],
              marginLeft: [10, 0],
            },
          }
        ),
      },
      itemCss,
      isLogo && {
        display: 'inline-flex',
        flexBasis: ['100%', '100%', 'inherit'],
        justifyContent: 'center',
      },
    ]}
    href={href}
    event={`|social channel footer click|${label}`}
  />
);

export const Logo = ({
  link = '/',
  itemCss = {
    width: siteSelector(undefined, { gr8: 67, hl: 191, mnt: 128 }),
    height: siteSelector(undefined, { gr8: 60, hl: 30, mnt: 50 }),
    textDecoration: 'none',
    marginBottom: ['30px', '30px', 0],
  },
}) => (
  <div
    css={{
      display: 'inline-block',
      margin: [0, 0, 'auto 55px auto 0'],
    }}
  >
    <SocialItem
      isLogo="true"
      iconId={siteSelector(undefined, {
        hl: css`
          background: url('https://s3-us-west-2.amazonaws.com/healthline-prod-next/content/hl-black.svg')
            no-repeat;
        `,
        gr8: css`
          background: url('https://images-prod.healthline.com/hlcmsresource/images/frontend-static/Greatist_Logo_G_White.svg')
            no-repeat;
        `,
        mnt: css`
          background: url('https://images-prod.healthline.com/hlcmsresource/images/frontend-static/mnt-logomark.svg')
            no-repeat;
          background-size: contain;
        `,
      })}
      itemCss={itemCss}
      href={link}
    />
  </div>
);

export const Facebook = ({
  link = siteSelector('http://www.facebook.com/pages/Healthline/173263326992', {
    gr8: 'https://www.facebook.com/greatist',
    mnt: 'https://www.facebook.com/MedicalNewsToday/',
  }),
  itemCss = siteSelector(undefined, {
    mnt: {
      marginRight: [30, 20],
      marginLeft: 0,
    },
  }),
}) => (
  <SocialItem
    iconId="icon-hl-facebook"
    itemCss={itemCss}
    href={link}
    label="Facebook channel icon clicked"
  />
);

export const Twitter = ({
  link = siteSelector('http://twitter.com/healthline', {
    gr8: 'https://twitter.com/greatist',
    mnt: 'https://twitter.com/mnt',
  }),
  itemCss,
}) => (
  <SocialItem
    iconId="icon-hl-twitter"
    itemCss={itemCss}
    href={link}
    label="Twitter channel icon clicked"
  />
);

export const Pinterest = ({
  link = siteSelector('http://pinterest.com/healthline/', {
    gr8: 'https://www.pinterest.com/greatist/',
  }),
  itemCss = {
    width: 15,
  },
}) => (
  <SocialItem
    iconId="icon-hl-pinterest"
    itemCss={itemCss}
    href={link}
    label="Pinterest channel icon clicked"
  />
);

export const Instagram = ({
  link = siteSelector('http://www.instagram.com/healthline', {
    gr8: 'https://www.instagram.com/greatist/',
  }),
  itemCss,
}) => (
  <SocialItem
    iconId="icon-hl-instagram"
    itemCss={itemCss}
    href={link}
    label="Instagram channel icon clicked"
  />
);

export const YouTube = ({
  link = 'https://www.youtube.com/user/AuthorityNutrition',
  itemCss,
}) => (
  <SocialItem
    iconId="icon-hl-youtube"
    href={link}
    label="YoutTube channel icon clicked"
    itemCss={itemCss}
  />
);

export const Flipboard = ({
  link = siteSelector('https://flipboard.com/@healthline', {
    gr8:
      'https://flipboard.com/@greatist?utm_source=GREATIST&utm_medium=follow&utm_campaign=tools',
  }),
  itemCss,
}) => (
  <SocialItem
    iconId="icon-hl-flipboard"
    itemCss={itemCss}
    href={link}
    label="Flipboard channel icon clicked"
  />
);

export const Mail = ({ link = '', itemCss }) => (
  <SocialItem
    iconId="icon-hl-email"
    href={link}
    label="Mail channel icon clicked"
    itemCss={itemCss}
  />
);

export const OutboundLink = ({ link = '', itemCss }) => (
  <SocialItem iconId="icon-hl-outbound-link" href={link} itemCss={itemCss} />
);

export const Linkedin = ({ link = '', itemCss }) => (
  <SocialItem
    iconId="icon-hl-linkedin"
    href={link}
    label="LinkedIn channel icon clicked"
    itemCss={itemCss}
  />
);

export default SocialItem;
