const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  'tabletAndUp': `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  'laptopAndUp': `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  'desktopAndUp': `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`
};

export const COLORS = {
  primary: {
    green: "hsl(192, 37%, 48%)",
    violet: "hsl(268, 34%, 53%)",
    black: "hsl(240 , 21%, 20%)",
    gray: "hsl(240 , 10%, 57%)"
  },
  neutral: {
    lightGreen: "hsla(192, 90%, 77%)",
    lightViolet: "hsla(268, 100%, 86%)",
    white: "hsl(0, 0%, 98%)",
  }
};