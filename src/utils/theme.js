const GREY = {
    0: '#FFFFFF',
    100: '#F9FAFB',
    200: '#F4F6F8',
    300: '#DFE3E8',
    400: '#C4CDD5',
    500: '#919EAB',
    600: '#637381',
    700: '#454F5B',
    800: '#212B36',
    900: '#161C24',
    1: '#000000',
};

const PRIMARY = {
    lighter: '#c4e0e5',
    light: '#a0cdd5',
    main: '#88c1cb',
    dark: '#6d9aa2',
    darker: '#446166',
    contrastText: '#fff',
};

const SECONDARY = {
    lighter: '#e4cb9d',
    light: '#d9b676',
    main: '#c9963b',
    dark: '#a1782f',
    darker: '#654b1e',
    contrastText: '#fff',
};

const INFO = {
    lighter: '#D0F2FF',
    light: '#74CAFF',
    main: '#1890FF',
    dark: '#0C53B7',
    darker: '#04297A',
    contrastText: '#fff',
};
const SUCCESS = {
    lighter: '#E9FCD4',
    light: '#AAF27F',
    main: '#54D62C',
    dark: '#229A16',
    darker: '#08660D',
    contrastText: GREY[800],
};
const WARNING = {
    lighter: '#FFF7CD',
    light: '#FFE16A',
    main: '#FFC107',
    dark: '#B78103',
    darker: '#7A4F01',
    contrastText: GREY[800],
};
const ERROR = {
    lighter: '#FFE7D9',
    light: '#FFA48D',
    main: '#FF4842',
    dark: '#B72136',
    darker: '#7A0C2E',
    contrastText: '#fff',
};

export default {
    palette: {
        common: { black: GREY[1], white: GREY[0] },
        primary: PRIMARY,
        secondary: SECONDARY,
        info: INFO,
        success: SUCCESS,
        warning: WARNING,
        error: ERROR,
        grey: GREY,
        text: {
            primary: GREY[800],
            secondary: GREY[600],
            disabled: GREY[500],
            light: GREY[0],
            dark: GREY[1],
        },
    },
};
