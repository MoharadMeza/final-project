import {
    createTheme,
    responsiveFontSizes,
    makeStyles,
  } from '@material-ui/core/styles';
  let theme = createTheme({
    marginTop: "50px",
    direction:'rtl',
    palette: { type: 'light', primary: {
      main : '#02ad07'
    }, 
    text : {primary : "#fffff"}
  },
  });
  theme = responsiveFontSizes(theme);
  const useStyle = makeStyles(() => ({
    root: {
      width: 'auto',
      marginTop:"170px",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(1000 + theme.spacing(2) * 2)]: {
        width: 1000,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      backgroundColor: "#000",
      color: theme.palette.text.primary,
    },
    paper: {
      // backgroundColor : "#585959",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
  }));
  export { theme, useStyle };