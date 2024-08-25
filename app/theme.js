'use client' 

import { createTheme} from "@mui/material/styles"

let theme = createTheme({
    palette: {
        primary: {
            main: '#009090',
            //contrastText: '#fae7e9',
        },
        secondary: {
            main: '#900090',
        },
    },
    typography: {
        //h6: {
          //fontWeight: 550,
        //},
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 600
    },
});

export default theme