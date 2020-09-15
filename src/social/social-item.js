import { css } from 'emotion';

const site = process.env.SITE;
const isGr8 = site === 'gr8';
const siteSelector = () => {

};

const facebookLink = siteSelector(
  'http://www.facebook.com/pages/Healthline/173263326992',
  {
    gr8: 'https://www.facebook.com/greatist',
    mnt: 'https://www.facebook.com/MedicalNewsToday/',
  }
);
const pinterestLink = siteSelector('http://pinterest.com/healthline/', {
  gr8: 'https://www.pinterest.com/greatist/',
});
const twitterLink = siteSelector('http://twitter.com/healthline', {
  gr8: 'https://twitter.com/greatist',
  mnt: 'https://twitter.com/mnt',
});
const instagramLink = siteSelector('http://www.instagram.com/healthline', {
  gr8: 'https://www.instagram.com/greatist/',
});
const flipboardLink = siteSelector('https://flipboard.com/@healthline', {
  gr8:
    'https://flipboard.com/@greatist?utm_source=GREATIST&utm_medium=follow&utm_campaign=tools',
});

export default function ({ overrides = {} } = {}) {
  const SocialItem = ({
    isLogo,
    itemCss,
    itemsCss,
    iconId,
    id,
    marginRight,
    href,
    label,
  }) => {
    const linkClass = [
      {
        // with height in the children will center vertically
        display: 'inline-flex',
        marginRight,
        marginBottom: 0,
        padding: 0,
        '&:last-child': { marginRight: 0 },
      },
      isLogo
        && siteSelector(
          { flexBasis: ['100%', '100%', 'inherit'] },
          {
            hl: {
              height: [90, 50],
              '@media max-mobile': {
                width: '100%',
                marginBottom: 20,
                display: 'inline',
              },
            },
          }
        ),
    ];
    return (
      <li key={id} css={linkClass}>
        <Link
          className={iconId}
          css={[
            {
              '&::before': {
                fontSize: 20,
              },
              color: 'text-black',
              textDecoration: 'none',
            },
            itemsCss,
            itemCss,
            isLogo
              && siteSelector(undefined, {
                gr8: {
                  margin: [
                    '0px auto 30px auto',
                    '30px auto 30px auto',
                    '0 40px 0 0',
                  ],
                  width: [70, undefined, 50],
                  height: [70, undefined, 50],
                },
                mnt: {
                  margin: [
                    '0px auto 30px auto',
                    '30px auto 30px auto',
                    '0 40px 0 0',
                  ],
                  width: [153, 127],
                  height: [60, 50],
                },
              }),
          ]}
          href={href}
          event={`|social channel footer click|${label}`}
        />
      </li>
    );
  };

  const icons = {
    gr8: css`
      background: url('https://images-prod.healthline.com/hlcmsresource/images/frontend-static/Greatist_Logo_G_White.svg')
        no-repeat;
    `,
    mnt: css`
      background: url('https://images-prod.healthline.com/hlcmsresource/images/frontend-static/mnt-logomark.svg')
        no-repeat;
      background-size: contain;
    `,
    hl: 'icon-hl-new-logo-icon',
  };

  const Logo = ({ itemsCss, ...rest }) => (
    <SocialItem
      isLogo="true"
      iconId={icons[site]}
      itemCss={{
        height: siteSelector(undefined, { hl: 43 }),
        textDecoration: 'none',
        '&::before': {
          color: siteSelector('cyan', { hl: '#000000' }),
          fontSize: siteSelector(43, { hl: [90, 50] }),
        },
        marginRight: siteSelector([0, 45], {
          gr8: 'inherit',
        }),
        width: isGr8 && 40,
      }}
      itemsCss={itemsCss}
      href={overrides[icons[site]] || '/'}
      {...rest}
    />
  );

  const Facebook = props => (
    <SocialItem
      iconId="icon-hl-facebook"
      itemCss={{
        ...siteSelector(
          { marginRight: [25, 20] },
          {
            hl: {
              marginRight: [15, 20],
              marginLeft: [10, 0],
            },
            mnt: {
              marginRight: [30, 20],
              marginLeft: 0,
            },
          }
        ),
        width: 20,
        height: 20,
      }}
      href={overrides['icon-hl-facebook'] || facebookLink}
      label="Facebook channel icon clicked"
      {...props}
    />
  );

  const Twitter = props => (
    <SocialItem
      iconId="icon-hl-twitter"
      itemCss={{
        ...siteSelector(
          { marginRight: [25, 20] },
          {
            hl: {
              marginRight: [15, 20],
              marginLeft: [10, 0],
            },
            mnt: {
              marginRight: 0,
            },
          }
        ),
        width: 20,
        height: 16,
        marginBottom: 4,
        ...props.overrideCss,
      }}
      href={overrides['icon-hl-twitter'] || twitterLink}
      label="Twitter channel icon clicked"
      {...props}
    />
  );
  const Pinterest = props => (
    <SocialItem
      iconId="icon-hl-pinterest"
      itemCss={{
        ...siteSelector(
          { marginRight: [25, 20] },
          {
            hl: {
              marginRight: [15, 20],
              marginLeft: [10, 0],
            },
          }
        ),
        width: 15,
        height: 20,
      }}
      href={overrides['icon-hl-pinterest'] || pinterestLink}
      label="Facebook channel icon clicked"
      {...props}
    />
  );
  const Instagram = props => (
    <SocialItem
      iconId="icon-hl-instagram"
      itemCss={{
        ...siteSelector(
          { marginRight: [25, 20] },
          {
            hl: {
              marginRight: [15, 20],
              marginLeft: [10, 0],
            },
          }
        ),
        width: 20,
        height: 20,
      }}
      href={overrides['icon-hl-instagram'] || instagramLink}
      label="Instagram channel icon clicked"
      {...props}
    />
  );
  const YouTube = props => (
    <SocialItem
      iconId="icon-hl-youtube"
      itemCss={{
        width: 20,
        height: 20,
      }}
      href={
        overrides['icon-hl-youtube']
        || 'https://www.youtube.com/user/AuthorityNutrition'
      }
      label="Instagram channel icon clicked"
      {...props}
    />
  );
  const Flipboard = props => (
    <SocialItem
      iconId="icon-hl-flipboard"
      itemCss={{
        ...siteSelector(
          { marginRight: [25, 20] },
          {
            hl: {
              marginRight: [15, 20],
              marginLeft: [10, 0],
            },
          }
        ),
        width: 20,
        height: 20,
      }}
      href={overrides['icon-hl-flipboard'] || flipboardLink}
      label="Flipboard channel icon clicked"
      {...props}
    />
  );
  const Mail = props => (
    <SocialItem
      iconId="icon-hl-email"
      itemCss={{
        width: 20,
        height: 20,
      }}
      href={overrides['icon-hl-email'] || ''}
      label="Mail channel icon clicked"
      {...props}
    />
  );

  const OutboundLink = props => (
    <SocialItem
      iconId="icon-hl-outbound-link"
      itemCss={{
        width: 20,
        height: 20,
      }}
      href={overrides['icon-hl-outbound-link'] || ''}
      {...props}
    />
  );

  const Linkedin = props => (
    <SocialItem
      iconId="icon-hl-linkedin"
      itemCss={{
        width: 20,
        height: 20,
      }}
      href={overrides['icon-hl-linkedin'] || ''}
      {...props}
    />
  );

  return {
    SocialItem,
    Logo,
    Facebook,
    Twitter,
    Pinterest,
    Instagram,
    YouTube,
    Mail,
    Flipboard,
    OutboundLink,
    Linkedin,
  };
}
