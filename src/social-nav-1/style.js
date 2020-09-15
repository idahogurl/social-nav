import siteSelector from "../site-selector";

const theme = {
  color: 'red',
wrapper: {
  color: 'pink'
}
};

const xtheme = siteSelector(undefined, {
  hl: {
    color: 'deeppink',
  }, 
  gr8: {
    color: 'green'
  }
});

const ntheme = {
  ...theme,
  ...xtheme,
};

const div = styled.div(({theme}) => {
  color: theme.wrapper.color,
});

export default function (tenant, wrapperCss) {
  const base = {
    display: "flex",
    alignItems: "center",
    paddingBottom: 0,
    textAlign: ["center", undefined],
    "& a": {
      color: wrapperCss.color ? wrapperCss.color : undefined
    },
    "& a:hover": {
      color: wrapperCss["&:hover"] ? wrapperCss["&:hover"].color : undefined
    },
    // not sure why the default would specify this when all the tenants override it
    // justifyContent: siteSelector(["center", undefined, "flex-start"], {
    //   hl: ["center", "flex-start"]
    // })
    justifyContent: ["center", undefined, "flex-start"],
    ...wrapperCss
  };

  return siteSelector(undefined, {
    hl: {
      ...base,
      marginBottom: [30, 40],
      flexWrap: ["wrap", "nowrap"],
      justifyContent: ["center", "left"],
      paddingTop: [30, 40],
    },
    mnt: {
      marginBottom: [30, 40],
      flexWrap: ["wrap", undefined, "nowrap"],
      justifyContent: ["center", undefined, "left"],
      ...base
    },
    gr8: {
      marginBottom: 32,
      flexWrap: ["wrap", undefined, "nowrap"],
      justifyContent: ["center", undefined, "left"],
      paddingTop: [30],
      ...base
    }
  }, tenant);
}

/*
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
*/
