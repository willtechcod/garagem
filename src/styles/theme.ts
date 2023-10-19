import { extendTheme } from 'native-base';

export const THEME = extendTheme({
    colors: {
        primary: {
            700: '#4CF412'
        },
        secondary: {
            700: '#808080'
        },
        background: {
            700: '#1D1D2E'
        },
        outline: {
            600: '#FEE81F'
        },
        border: {
            800: '#FFFFFF'
        },
        dark: {
            700: '#1D1D2E'
        },
        text: {
            600: '#ffffff'
        },
        click: {
            600: '#7EFD51'
        },
        time: {
            600: '#D27C2C'
        },
        circo: {
            700: '#439426'
        },
        header: {
            400: '#37374F'
        }
    },
    fonts: {
        heading: 'Roboto_700Bold',
        body: 'Roboto_400Regular',
    },
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
    },
    sizes: {
        14: 56
    }
});