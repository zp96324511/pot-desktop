import React, { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import TopBar from './components/TopBar';
import SourceArea from './components/SourceArea';
import LanguageSelector from './components/LanguageSelector';
import TargetArea from './components/TargetArea';
import { get } from '../../global/config';
import { light, dark } from '../themes';

export default function App() {
  const [theme, setTheme] = useState(get('theme', 'auto'));
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  return (
    <ThemeProvider theme={theme == 'auto' ? (prefersDarkMode ? dark : light) : (theme == 'dark' ? dark : light)}>
      <CssBaseline />
      <TopBar />
      <SourceArea />
      <LanguageSelector />
      <TargetArea />
    </ThemeProvider>
  )
}
