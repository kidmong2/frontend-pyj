import { createTheme } from "@mui/material";


//: MUI 스타일 테마 설정
export const theme = createTheme({
  palette: {
    primary: {
      main: '#376140'
    },
    secondary: {
      main: '#dc004e'
    },
    error: {
      main: '#f44336'
    },
    background: {

    },
    text: {
  
    }
  },

  typography: {
    // fontFamily: '',
    fontSize: 14,
    h1: {
      fontSize: 20,
      fontWeight: 500
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 400
    }
  }
});