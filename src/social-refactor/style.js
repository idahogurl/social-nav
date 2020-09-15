import siteSelector from '../site-selector';
export default (wrapperCss) => {
    
    justifyContent: siteSelector(['center', undefined, 'flex-start'], {
      hl: ['center', 'flex-start'],
    
const base = {
  display: 'flex',
  alignItems: 'center',
  paddingBottom: 0,
  textAlign: ['center', undefined],
  paddingTop: [30, 40],
  
//  textAlign: 'center', // same as above
flexWrap: ['wrap', undefined, 'nowrap'],
    justifyContent: ['center', undefined, 'left'],
  '& a': {
    color: wrapperCss.color ? wrapperCss.color : undefined,
  },
  '& a:hover': {
    color: wrapperCss['&:hover']
      ? wrapperCss['&:hover'].color
      : undefined,
  },
  ...wrapperCss,
};


return siteSelector(undefined,
  {
    hl: {
      flexWrap: ['wrap', 'nowrap'],
      justifyContent: ['center', 'left'],
    },
    gr8: {
      paddingTop: [30],
    }
  });
}