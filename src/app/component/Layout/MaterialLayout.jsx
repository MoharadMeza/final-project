import React from 'react';
import { useLocation } from 'react-router';
import { Paper, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme, useStyle } from './styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });


export default function MaterialLayout(props) {
  const currentRoute = useLocation()
  const { children } = props;
  const classes = useStyle();
  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.root}>
          <Paper className={classes.paper}>{children}</Paper>
        </div>
      </ThemeProvider>
    </StylesProvider>

  );
}