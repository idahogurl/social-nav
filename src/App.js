import React from "react";
import "./styles.css";
import SocialNav from "./social-refactor/index";
import siteSelector from './site-selector';

export default function App() {
  const wrapperCss = {
    marginBottom: '30px',
    padding: 0,
    color: siteSelector('cyan', { gr8: 'pink', mnt: 'blue' }),
    '&:hover': {
      color: siteSelector(undefined, { gr8: 'pink-dark' }),
    },
  }
  return <SocialNav wrapperCss={wrapperCss} />;
}
/*
<SocialNav
                wrapperCss={{
                  marginBottom: '30px',
                  padding: 0,
                  color: siteSelector('cyan', { gr8: 'pink', mnt: 'blue' }),
                  '&:hover': {
                    color: siteSelector(undefined, { gr8: 'pink-dark' }),
                  },
                }}
              >
                {links.facebook && <Facebook link={links.facebook} />}
                {links.linkedin && <Linkedin link={links.linkedin} />}
*/
