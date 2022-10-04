import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { PropsWithChildren } from 'react';
import { defaultTheme } from 'theme/defaultTheme';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return <MuiThemeProvider theme={defaultTheme}>{children}</MuiThemeProvider>;
};
