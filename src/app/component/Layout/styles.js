import {
    createTheme,
    responsiveFontSizes,
    makeStyles,
  } from '@material-ui/core/styles';
  import { cyan } from '@material-ui/core/colors';
  let theme = createTheme({
    marginTop: "50px",
    direction:'rtl',
    palette: { type: 'dark', primary: {
      main : '#02ad07'
    } },
    secondary : {
      main : "#fffff"
    }
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
      // backgroundColor: theme.palette.secondary,
      color: theme.palette.text.primary,
    },
    paper: {
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